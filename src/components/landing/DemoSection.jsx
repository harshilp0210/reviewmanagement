import { useState } from 'react';
import ReviewsInbox from '../features/ReviewsInbox';
import ReplyAssistant from '../features/ReplyAssistant';
import ReviewRequestGenerator from '../features/ReviewRequestGenerator';
import './DemoSection.css';

function DemoSection() {
    const [activeTab, setActiveTab] = useState('inbox');

    const tabs = [
        { id: 'inbox', label: 'Reviews Inbox', icon: '📥' },
        { id: 'reply', label: 'Reply Assistant', icon: '✨' },
        { id: 'request', label: 'Review Request', icon: '📱' }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'inbox':
                return <ReviewsInbox />;
            case 'reply':
                return <ReplyAssistant />;
            case 'request':
                return <ReviewRequestGenerator />;
            default:
                return <ReviewsInbox />;
        }
    };

    return (
        <section id="features" className="demo-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">✨ Interactive Demo</span>
                    <h2>Experience the Power</h2>
                    <p>
                        See how ReviewHub helps you manage reviews, craft perfect responses,
                        and generate more 5-star reviews.
                    </p>
                </div>

                <div className="demo-container glass-card">
                    <div className="demo-tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`demo-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="demo-tab-icon">{tab.icon}</span>
                                <span className="demo-tab-label">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="demo-content">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DemoSection;
