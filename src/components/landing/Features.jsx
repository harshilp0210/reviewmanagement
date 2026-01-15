import { useScrollAnimation } from '../../hooks/useAnimations.jsx';
import './Features.css';

const features = [
    {
        icon: '📥',
        title: 'Unified Inbox',
        description: 'All your reviews from Google, Yelp, Facebook, and TripAdvisor in one centralized dashboard. Never miss a review again.',
        benefits: ['Real-time notifications', 'Cross-platform sync', 'Smart filtering']
    },
    {
        icon: '🤖',
        title: 'AI-Powered Replies',
        description: 'Generate personalized, professional responses in seconds. Our AI understands context and maintains your brand voice.',
        benefits: ['Tone customization', 'Template library', 'Smart suggestions']
    },
    {
        icon: '📧',
        title: 'Review Requests',
        description: 'Automatically request reviews from happy customers via SMS, email, or QR codes. Boost your review volume effortlessly.',
        benefits: ['Smart timing', 'Multi-channel', 'QR code generator']
    },
    {
        icon: '📊',
        title: 'Analytics Dashboard',
        description: 'Track your reputation with powerful analytics. Monitor trends, sentiment, and response times across all platforms.',
        benefits: ['Trend analysis', 'Sentiment tracking', 'Custom reports']
    },
    {
        icon: '⭐',
        title: 'Review Widget',
        description: 'Showcase your best reviews on your website. Customizable widgets that build trust and convert visitors.',
        benefits: ['Easy embed', 'Auto-updates', 'Multiple styles']
    },
    {
        icon: '🔔',
        title: 'Smart Alerts',
        description: 'Get instant notifications for new reviews, especially negative ones. Respond quickly to protect your reputation.',
        benefits: ['Priority alerts', 'Team routing', 'Escalation rules']
    }
];

function Features() {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section id="features" className="features-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">✨ Features</span>
                    <h2>Everything You Need to Manage Reviews</h2>
                    <p>Powerful tools designed to help you collect more reviews, respond faster, and build a stellar reputation.</p>
                </div>

                <div
                    ref={ref}
                    className={`features-grid ${isVisible ? 'animate-visible' : ''}`}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <ul className="feature-benefits">
                                {feature.benefits.map((benefit, i) => (
                                    <li key={i}>
                                        <span className="benefit-check">✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
