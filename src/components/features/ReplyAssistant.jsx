import { useState } from 'react';
import { replyTemplates, mockReviews } from '../../data/mockData';
import { processTemplate } from '../../utils/helpers';
import './ReplyAssistant.css';

function ReplyAssistant() {
    const [selectedCategory, setSelectedCategory] = useState('positive');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [tone, setTone] = useState('friendly');
    const [replyText, setReplyText] = useState('');
    const [copied, setCopied] = useState(false);

    // Use first review as example
    const exampleReview = mockReviews[0];

    const templates = replyTemplates[selectedCategory] || [];

    const applyTemplate = (template) => {
        setSelectedTemplate(template);
        const processed = processTemplate(template.text, {
            customer_name: exampleReview.customerName,
            location: exampleReview.location,
            service: exampleReview.service
        });
        setReplyText(processed);
    };

    const adjustTone = (newTone) => {
        setTone(newTone);
        // Simple tone adjustment simulation
        if (replyText) {
            let adjusted = replyText;
            if (newTone === 'professional') {
                adjusted = adjusted.replace(/!/g, '.').replace(/so happy/gi, 'pleased').replace(/amazing/gi, 'excellent');
            } else if (newTone === 'apologetic') {
                adjusted = 'We sincerely apologize for any inconvenience. ' + adjusted;
            }
            setReplyText(adjusted);
        }
    };

    const generateAIReply = () => {
        // Simulate AI-generated reply
        const aiReply = `Thank you so much for taking the time to share your wonderful experience, ${exampleReview.customerName}! We're absolutely thrilled that our team at ${exampleReview.location} exceeded your expectations.

Your kind words about our ${exampleReview.service} service mean the world to us and will definitely be shared with the team. We truly appreciate your support and can't wait to welcome you back soon!

Warm regards,
The ReviewHub Team`;

        setReplyText(aiReply);
        setSelectedTemplate(null);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(replyText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="reply-assistant">
            {/* Sample Review Preview */}
            <div className="sample-review glass-card">
                <div className="sample-header">
                    <span className="sample-label">Responding to:</span>
                    <span className="badge-google">Google</span>
                </div>
                <div className="sample-content">
                    <div className="sample-reviewer">
                        <div className="sample-avatar">{exampleReview.customerName.charAt(0)}</div>
                        <div>
                            <strong>{exampleReview.customerName}</strong>
                            <div className="sample-stars">{'★'.repeat(exampleReview.rating)}{'☆'.repeat(5 - exampleReview.rating)}</div>
                        </div>
                    </div>
                    <p className="sample-text">"{exampleReview.text}"</p>
                </div>
            </div>

            <div className="reply-builder">
                {/* Template Selection */}
                <div className="template-section">
                    <h4>Response Templates</h4>

                    <div className="category-tabs">
                        {['positive', 'neutral', 'negative'].map(cat => (
                            <button
                                key={cat}
                                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat === 'positive' && '👍'}
                                {cat === 'neutral' && '😐'}
                                {cat === 'negative' && '😟'}
                                <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                            </button>
                        ))}
                    </div>

                    <div className="template-list">
                        {templates.map(template => (
                            <button
                                key={template.id}
                                className={`template-item ${selectedTemplate?.id === template.id ? 'active' : ''}`}
                                onClick={() => applyTemplate(template)}
                            >
                                {template.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tone Toggle */}
                <div className="tone-section">
                    <h4>Adjust Tone</h4>
                    <div className="toggle-group">
                        {['friendly', 'professional', 'apologetic'].map(t => (
                            <button
                                key={t}
                                className={`toggle-option ${tone === t ? 'active' : ''}`}
                                onClick={() => adjustTone(t)}
                            >
                                {t === 'friendly' && '😊'}
                                {t === 'professional' && '💼'}
                                {t === 'apologetic' && '🙏'}
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* AI Generate Button */}
                <button className="btn btn-primary ai-btn" onClick={generateAIReply}>
                    <span className="ai-sparkle">✨</span>
                    Generate AI Reply
                </button>

                {/* Reply Editor */}
                <div className="reply-editor">
                    <div className="editor-header">
                        <h4>Your Reply</h4>
                        <div className="smart-fields">
                            <span className="smart-field">{'{{customer_name}}'}</span>
                            <span className="smart-field">{'{{location}}'}</span>
                            <span className="smart-field">{'{{service}}'}</span>
                        </div>
                    </div>
                    <textarea
                        className="input textarea reply-textarea"
                        placeholder="Write your reply or select a template..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="editor-actions">
                        <span className="char-count">{replyText.length} characters</span>
                        <button
                            className="btn btn-secondary btn-sm"
                            onClick={copyToClipboard}
                            disabled={!replyText}
                        >
                            {copied ? '✓ Copied!' : '📋 Copy'}
                        </button>
                        <button
                            className="btn btn-primary btn-sm"
                            disabled={!replyText}
                        >
                            Send Reply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReplyAssistant;
