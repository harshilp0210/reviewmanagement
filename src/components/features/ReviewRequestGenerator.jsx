import { useState, useEffect, useRef } from 'react';
import { locations } from '../../data/mockData';
import { generateShortLink } from '../../utils/helpers';
import { useToast } from '../ui/Toast';
import './ReviewRequestGenerator.css';

function ReviewRequestGenerator() {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);
    const [shortLink, setShortLink] = useState('');
    const [smartRouting, setSmartRouting] = useState(true);
    const [messageType, setMessageType] = useState('sms');
    const [copied, setCopied] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const qrRef = useRef(null);
    const toast = useToast();

    // SMS/Email templates
    const templates = {
        sms: `Hi {{name}}! Thank you for choosing ${selectedLocation.name}! We'd love to hear about your experience. Leave us a quick review: https://${shortLink}`,
        email: {
            subject: `How was your visit to ${selectedLocation.name}?`,
            body: `Dear {{name}},\n\nThank you for visiting ${selectedLocation.name} today!\n\nYour feedback helps us improve and helps other customers find us. Would you take a moment to share your experience?\n\n👉 Leave a review: https://${shortLink}\n\nThank you so much!\nThe ${selectedLocation.name} Team`
        }
    };

    useEffect(() => {
        setShortLink(generateShortLink());
    }, [selectedLocation]);

    // Simple QR code visualization
    const drawQR = () => {
        const canvas = qrRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const size = 200;
        canvas.width = size;
        canvas.height = size;

        // Background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, size, size);

        // Simple QR-like pattern (decorative)
        ctx.fillStyle = '#0a0a0f';
        const cellSize = 8;
        const padding = 16;

        // Corner squares
        const drawCorner = (x, y) => {
            ctx.fillRect(x, y, cellSize * 7, cellSize * 7);
            ctx.fillStyle = 'white';
            ctx.fillRect(x + cellSize, y + cellSize, cellSize * 5, cellSize * 5);
            ctx.fillStyle = '#0a0a0f';
            ctx.fillRect(x + cellSize * 2, y + cellSize * 2, cellSize * 3, cellSize * 3);
        };

        drawCorner(padding, padding);
        drawCorner(size - padding - cellSize * 7, padding);
        drawCorner(padding, size - padding - cellSize * 7);

        // Random data pattern
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                if (Math.random() > 0.5) {
                    const x = padding + cellSize * 8 + j * cellSize * 0.6;
                    const y = padding + i * cellSize;
                    if (x < size - padding && y > padding + cellSize * 8) {
                        ctx.fillRect(x, y, cellSize * 0.5, cellSize * 0.5);
                    }
                }
            }
        }
    };

    useEffect(() => {
        drawQR();
    }, [shortLink]);

    const copyLink = () => {
        navigator.clipboard.writeText(`https://${shortLink}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success('Link copied to clipboard!');
    };

    const regenerateLink = () => {
        setShortLink(generateShortLink());
        setCopied(false);
    };

    const handleSend = () => {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            toast.success(`Test ${messageType.toUpperCase()} sent successfully!`);
        }, 1500);
    };

    return (
        <div className="request-generator">
            <div className="generator-controls">
                {/* Location Selector */}
                <div className="control-section">
                    <h4>Select Location</h4>
                    <div className="location-selector">
                        {locations.slice(0, 4).map(loc => (
                            <button
                                key={loc.id}
                                className={`location-btn ${selectedLocation.id === loc.id ? 'active' : ''}`}
                                onClick={() => setSelectedLocation(loc)}
                            >
                                <span className="loc-icon">📍</span>
                                <span className="loc-name">{loc.name}</span>
                                <span className="loc-reviews">{loc.reviews} reviews</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Smart Routing Toggle */}
                <div className="control-section smart-routing-section">
                    <div className="smart-routing-header">
                        <h4>Smart Routing</h4>
                        <span className="smart-badge">✨ Recommended</span>
                    </div>
                    <p className="smart-description">
                        Route happy customers to public review sites, unhappy customers to private feedback form first.
                    </p>
                    <button
                        className={`smart-toggle ${smartRouting ? 'active' : ''}`}
                        onClick={() => setSmartRouting(!smartRouting)}
                    >
                        <span className="toggle-track">
                            <span className="toggle-thumb"></span>
                        </span>
                        <span>{smartRouting ? 'Enabled' : 'Disabled'}</span>
                    </button>

                    {smartRouting && (
                        <div className="routing-flow">
                            <div className="flow-step positive">
                                <span className="flow-icon">😊</span>
                                <span>Happy → Google/Yelp</span>
                            </div>
                            <div className="flow-arrow">→</div>
                            <div className="flow-step negative">
                                <span className="flow-icon">😔</span>
                                <span>Unhappy → Private Form</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Message Templates */}
                <div className="control-section">
                    <h4>Message Template</h4>
                    <div className="message-tabs">
                        <button
                            className={`message-tab ${messageType === 'sms' ? 'active' : ''}`}
                            onClick={() => setMessageType('sms')}
                        >
                            📱 SMS
                        </button>
                        <button
                            className={`message-tab ${messageType === 'email' ? 'active' : ''}`}
                            onClick={() => setMessageType('email')}
                        >
                            ✉️ Email
                        </button>
                    </div>

                    <div className="template-preview">
                        {messageType === 'sms' ? (
                            <div className="sms-preview">
                                <div className="sms-bubble">{templates.sms}</div>
                            </div>
                        ) : (
                            <div className="email-preview">
                                <div className="email-subject">
                                    <strong>Subject:</strong> {templates.email.subject}
                                </div>
                                <div className="email-body">{templates.email.body}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* QR Code & Link Output */}
            <div className="generator-output glass-card">
                <div className="output-header">
                    <h4>Your Review Link</h4>
                    <button className="btn btn-ghost btn-sm" onClick={regenerateLink}>
                        🔄 Regenerate
                    </button>
                </div>

                <div className="qr-container">
                    <canvas ref={qrRef} className="qr-code"></canvas>
                    <p className="qr-label">Scan to leave a review</p>
                </div>

                <div className="link-container">
                    <div className="link-box">
                        <span className="link-icon">🔗</span>
                        <span className="link-text">https://{shortLink}</span>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={copyLink}
                        >
                            {copied ? '✓ Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>

                <div className="share-options">
                    <button
                        className="share-btn primary"
                        onClick={handleSend}
                        disabled={isSending}
                    >
                        {isSending ? 'Sending...' : (
                            <>
                                <span>{messageType === 'sms' ? '📱' : '✉️'}</span>
                                Send Test {messageType === 'sms' ? 'SMS' : 'Email'}
                            </>
                        )}
                    </button>
                </div>

                <div className="download-options">
                    <button className="share-btn"><span>⬇️</span> PNG</button>
                    <button className="share-btn"><span>⬇️</span> SVG</button>
                    <button className="share-btn"><span>🖨️</span> Print</button>
                </div>

                <div className="usage-tips">
                    <h5>💡 Pro Tips</h5>
                    <ul>
                        <li>Place QR code on receipts, table tents, or checkout counters</li>
                        <li>Send SMS within 24 hours of visit for best results</li>
                        <li>Personalize messages with customer names when possible</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ReviewRequestGenerator;
