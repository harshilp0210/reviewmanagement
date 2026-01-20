import { useState, useEffect } from 'react';
import { replyTemplates, mockReviews } from '../../data/mockData';
import { processTemplate } from '../../utils/helpers';
import './ReplyAssistant.css';

function ReplyAssistant() {
    const [selectedCategory, setSelectedCategory] = useState('positive');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [tone, setTone] = useState('friendly');
    const [replyText, setReplyText] = useState('');
    const [copied, setCopied] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    // Use first review as example (in real app, this would be passed in)
    const exampleReview = mockReviews[0];

    // Simulate Sentiment Analysis on mount
    useEffect(() => {
        if (exampleReview.rating >= 4) setSelectedCategory('positive');
        else if (exampleReview.rating === 3) setSelectedCategory('neutral');
        else setSelectedCategory('negative');
    }, [exampleReview]);

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

    const generateSmartReply = () => {
        setIsGenerating(true);
        setReplyText(''); // Clear current text to show typing effect

        // Simulate network/processing delay
        setTimeout(() => {
            const bases = {
                friendly: {
                    positive: `Hi ${exampleReview.customerName}! 👋\n\nThanks so much for the glowing review! We're super happy to hear you loved the ${exampleReview.service}. It makes our day to see feedback like this.\n\nCan't wait to see you again at ${exampleReview.location}!`,
                    neutral: `Hi ${exampleReview.customerName},\n\nThanks for stopping by ${exampleReview.location}. We appreciate your feedback and want to make sure your next visit is even better. Hope to see you soon!`,
                    negative: `Hi ${exampleReview.customerName},\n\nWe're really sorry to hear about your experience. This isn't the standard we aim for at ${exampleReview.location}. Please reach out to us directly so we can make it right.`
                },
                professional: {
                    positive: `Dear ${exampleReview.customerName},\n\nThank you for taking the time to share your feedback. We are delighted to hear that you enjoyed your experience with our ${exampleReview.service} service at ${exampleReview.location}.\n\nWe look forward to serving you again soon.\n\nSincerely,\nThe Team`,
                    neutral: `Dear ${exampleReview.customerName},\n\nThank you for your review of ${exampleReview.location}. We value your feedback as it helps us identify areas for improvement. We hope to have the opportunity to serve you better in the future.`,
                    negative: `Dear ${exampleReview.customerName},\n\nWe apologize that your experience did not meet your expectations. We take all feedback seriously and would like to address your concerns. Please contact our management team directly.`
                },
                apologetic: {
                    positive: `Hello ${exampleReview.customerName},\n\nWow, thank you! We are so humbled by your kind words about the ${exampleReview.service}. It means a lot to our team at ${exampleReview.location}!\n\nThanks again!`,
                    neutral: `Hello ${exampleReview.customerName},\n\nI'm sorry your visit wasn't perfect. We always try our best at ${exampleReview.location}, and I appreciate you telling us where we can improve.`,
                    negative: `Dear ${exampleReview.customerName},\n\nI am sincerely sorry for the disappointment you experienced. We clearly missed the mark with your ${exampleReview.service}, and for that, I apologize. Please give us a chance to fix this.`
                }
            };

            // Select base based on tone and category (simulated logic)
            // In a real AI, this would be a prompt to an LLM
            let generated = bases[tone][selectedCategory] || bases['professional']['positive'];

            // Add some "magic" variation
            const magicPhrases = [
                "\n\nP.S. We shared this with the whole team!",
                "\n\nThanks for being a loyal customer.",
                "\n\nWe truly value your support."
            ];

            if (exampleReview.rating === 5) {
                generated += magicPhrases[Math.floor(Math.random() * magicPhrases.length)];
            }

            setReplyText(generated);
            setIsGenerating(false);
            setSelectedTemplate(null);
        }, 1500);
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
                {/* Tone Toggle */}
                <div className="tone-section">
                    <h4>Adjust Tone</h4>
                    <div className="toggle-group">
                        {['friendly', 'professional', 'apologetic'].map(t => (
                            <button
                                key={t}
                                className={`toggle-option ${tone === t ? 'active' : ''}`}
                                onClick={() => setTone(t)}
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
                <button
                    className={`btn btn-primary ai-btn ${isGenerating ? 'generating' : ''}`}
                    onClick={generateSmartReply}
                    disabled={isGenerating}
                >
                    {isGenerating ? (
                        <>
                            <span className="ai-spinner">✨</span>
                            Writing Magic...
                        </>
                    ) : (
                        <>
                            <span className="ai-sparkle">✨</span>
                            Generate Smart Reply
                        </>
                    )}
                </button>

                <div className="divider"><span>OR SELECT TEMPLATE</span></div>

                {/* Template Selection */}
                <div className="template-section">
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

                {/* Reply Editor */}
                <div className="reply-editor">
                    <div className="editor-header">
                        <h4>Your Reply</h4>
                        <div className="editor-tools">
                            {/* Tools placeholder */}
                        </div>
                    </div>
                    <textarea
                        className="input textarea reply-textarea"
                        placeholder={isGenerating ? "AI is thinking..." : "Write your reply or select a template..."}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        disabled={isGenerating}
                    />
                    <div className="editor-actions">
                        <span className="char-count">{replyText.length} chars</span>
                        <div className="action-buttons">
                            <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => setReplyText('')}
                                disabled={!replyText}
                            >
                                Clear
                            </button>
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
                                Post Reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReplyAssistant;
