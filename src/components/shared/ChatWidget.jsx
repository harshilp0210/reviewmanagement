import { useState, useRef, useEffect } from 'react';
import { chatService } from '../../services/ChatService';
import './ChatWidget.css';

function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! 👋 I'm your support assistant. How can I help you today?", isBot: true, timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [conversationId, setConversationId] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    // Load existing conversation on mount (if persisted)
    useEffect(() => {
        const storedId = localStorage.getItem('review_platform_chat_id');
        if (storedId) {
            setConversationId(storedId);
            loadHistory(storedId);
            subscribe(storedId);
        }
    }, []);

    const loadHistory = async (id) => {
        try {
            const history = await chatService.getMessages(id);
            if (history && history.length > 0) {
                const formatted = history.map(msg => ({
                    text: msg.content,
                    isBot: msg.sender_type !== 'user',
                    timestamp: new Date(msg.created_at)
                }));
                setMessages(formatted);
            }
        } catch (err) {
            console.error("Failed to load history", err);
        }
    };

    const subscribe = (id) => {
        chatService.subscribeToMessages((newMsg) => {
            if (newMsg.conversation_id === id) {
                setMessages(prev => {
                    // Avoid duplicates
                    const exists = prev.some(m => m.timestamp && new Date(m.timestamp).getTime() === new Date(newMsg.created_at).getTime());
                    // Simple timestamp check isn't perfect but good enough for demo. 
                    // Ideally use IDs, but our local 'initial' message has no ID.
                    // We only care about adding 'agent' messages coming from Realtime.
                    if (newMsg.sender_type === 'user') return prev; // We already added our own message optimally

                    return [...prev, {
                        text: newMsg.content,
                        isBot: newMsg.sender_type !== 'user',
                        timestamp: new Date(newMsg.created_at)
                    }];
                });
            }
        });
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const content = inputValue;
        const tempMsg = { text: content, isBot: false, timestamp: new Date() };

        // Optimistic UI update
        setMessages(prev => [...prev, tempMsg]);
        setInputValue('');
        setIsTyping(true);

        try {
            let activeConvId = conversationId;

            // Create conversation if new
            if (!activeConvId) {
                // Get default location (just for this demo)
                const locationId = await chatService.getPublicDefaultLocation();
                if (!locationId) {
                    console.error("No location found to start chat");
                    setMessages(prev => [...prev, { text: "⚠️ Service unavailable (No Location Configured)", isBot: true, timestamp: new Date() }]);
                    setIsTyping(false);
                    return;
                }

                const conv = await chatService.createConversation('Web Visitor', locationId);
                activeConvId = conv.id;
                setConversationId(activeConvId);
                localStorage.setItem('review_platform_chat_id', activeConvId);
                subscribe(activeConvId);
            }

            // Send Message
            await chatService.sendMessage(activeConvId, content, 'user');

            // We rely on Realtime for the reply, but let's hide typing immediately
            setIsTyping(false);

        } catch (err) {
            console.error("Failed to send message", err);
            setIsTyping(false);
            setMessages(prev => [...prev, { text: "⚠️ Failed to send. Please try again.", isBot: true, timestamp: new Date() }]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="chat-widget-container">
            {/* Toggle Button */}
            <button
                className={`chat-widget-toggle ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chat"
            >
                {isOpen ? (
                    <span className="toggle-icon">✕</span>
                ) : (
                    <span className="toggle-icon">💬</span>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="bot-info">
                            <div className="bot-avatar">🤖</div>
                            <div className="bot-details">
                                <h4>Support</h4>
                                <div className="bot-status">
                                    <span className="status-dot"></span>
                                    {conversationId ? 'Connected' : 'Online'}
                                </div>
                            </div>
                        </div>
                        <button className="close-chat-btn" onClick={() => setIsOpen(false)}>✕</button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                                <div className="message-content">
                                    {msg.text}
                                </div>
                                <span className="message-time">
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="message bot">
                                <div className="message-content typing-dots">
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-area">
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            className="send-btn"
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatWidget;
