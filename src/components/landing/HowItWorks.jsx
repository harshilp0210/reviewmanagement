import { useScrollAnimation } from '../../hooks/useAnimations.jsx';
import './HowItWorks.css';

const steps = [
    {
        number: '01',
        icon: '🔗',
        title: 'Connect Your Platforms',
        description: 'Link your Google, Yelp, Facebook, and TripAdvisor accounts in just a few clicks. We\'ll automatically sync all your existing reviews.',
        detail: 'Takes less than 5 minutes to set up'
    },
    {
        number: '02',
        icon: '📥',
        title: 'Receive Reviews in One Inbox',
        description: 'All new reviews flow into your unified inbox. Get instant notifications and see everything at a glance, organized by platform and rating.',
        detail: 'Real-time sync across all platforms'
    },
    {
        number: '03',
        icon: '✍️',
        title: 'Respond with AI Assistance',
        description: 'Use our AI to craft personalized responses in seconds. Choose your tone, customize the message, and reply directly from the dashboard.',
        detail: 'Average response time: under 2 minutes'
    },
    {
        number: '04',
        icon: '📈',
        title: 'Request More Reviews',
        description: 'Send automated review requests to happy customers via SMS or email. Use smart timing to maximize response rates.',
        detail: 'Businesses see 3x more reviews on average'
    },
    {
        number: '05',
        icon: '📊',
        title: 'Track Your Growth',
        description: 'Monitor your reputation with detailed analytics. See trends, compare periods, and measure the impact of your efforts.',
        detail: 'Weekly and monthly reports delivered'
    }
];

function HowItWorks() {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section id="how-it-works" className="how-it-works-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">🎯 How It Works</span>
                    <h2>Get Started in 5 Simple Steps</h2>
                    <p>From setup to success in minutes. Here's how ReviewManager transforms your reputation management.</p>
                </div>

                <div
                    ref={ref}
                    className={`steps-container ${isVisible ? 'animate-visible' : ''}`}
                >
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="step-item"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="step-number-container">
                                <span className="step-number">{step.number}</span>
                                {index < steps.length - 1 && <div className="step-line" />}
                            </div>

                            <div className="step-content glass-card">
                                <div className="step-icon">{step.icon}</div>
                                <div className="step-text">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <span className="step-detail">{step.detail}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="how-it-works-cta">
                    <button className="btn btn-primary btn-lg">
                        Start Your Free Trial
                        <span className="btn-arrow">→</span>
                    </button>
                    <p className="cta-note">No credit card required • 14-day free trial</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
