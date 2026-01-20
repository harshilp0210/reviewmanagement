import { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! 👋 I'm your AI assistant. Ask me anything about ReviewManager, our pricing, or features!", isBot: true, timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    // Simulated AI Logic
    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('plan')) {
            return "Our pricing starts at $29/mo for the Starter plan. We also have a Pro plan at $79/mo for growing businesses. You can try any plan free for 14 days!";
        }
        if (lowerInput.includes('reviews') || lowerInput.includes('negative')) {
            return "Managing reviews is crucial! With ReviewManager, you can aggregate reviews from Google, Facebook, and Yelp in one place. We also help you filter negative feedback privately.";
        }
        if (lowerInput.includes('demo') || lowerInput.includes('try')) {
            return "You can start a free trial right now by clicking 'Get Started' in the navigation bar. No credit card required!";
        }
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hello! How can I help you grow your business reputation today?";
        }
        if (lowerInput.includes('thank')) {
            return "You're welcome! Let me know if you have any other questions.";
        }

        return "That's a great question! While I'm a demo AI, our support team can give you a detailed answer. Feel free to check out our 'Features' page for more info.";
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMsg = { text: inputValue, isBot: false, timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate network delay
        setTimeout(() => {
            const botResponse = generateResponse(userMsg.text);
            setMessages(prev => [
                ...prev,
                { text: botResponse, isBot: true, timestamp: new Date() }
            ]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        // Optional: auto-send
        // handleSend();
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
                                <h4>AI Assistant</h4>
                                <div className="bot-status">
                                    <span className="status-dot"></span>
                                    Online
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

                    <div className="chat-suggestions">
                        <button className="suggestion-chip" onClick={() => handleSuggestionClick("Pricing info")}>💰 Pricing info</button>
                        <button className="suggestion-chip" onClick={() => handleSuggestionClick("How does it work?")}>🛠 How does it work?</button>
                        <button className="suggestion-chip" onClick={() => handleSuggestionClick("Start free trial")}>🚀 Start free trial</button>
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
