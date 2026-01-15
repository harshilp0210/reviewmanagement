import { useScrollAnimation } from '../../hooks/useAnimations.jsx';
import './Integrations.css';

const integrations = [
    {
        name: 'Google',
        icon: 'G',
        color: '#4285f4',
        description: 'Google Business Profile',
        features: ['Review sync', 'Auto-respond', 'Insights']
    },
    {
        name: 'Yelp',
        icon: 'Y',
        color: '#ff1a1a',
        description: 'Yelp for Business',
        features: ['Review monitoring', 'Quick replies', 'Analytics']
    },
    {
        name: 'Facebook',
        icon: 'f',
        color: '#1877f2',
        description: 'Facebook Recommendations',
        features: ['Page reviews', 'Recommendations', 'Responses']
    },
    {
        name: 'TripAdvisor',
        icon: 'T',
        color: '#34e0a1',
        description: 'TripAdvisor Reviews',
        features: ['Travel reviews', 'Rating sync', 'Replies']
    },
    {
        name: 'Trustpilot',
        icon: 'T',
        color: '#00b67a',
        description: 'Trustpilot Reviews',
        features: ['Verified reviews', 'Widgets', 'Invitations']
    },
    {
        name: 'Apple Maps',
        icon: '🍎',
        color: '#555',
        description: 'Apple Business Connect',
        features: ['Place cards', 'Ratings', 'Business info']
    }
];

const comingSoon = [
    { name: 'G2', icon: 'G2', color: '#ff492c' },
    { name: 'Capterra', icon: 'C', color: '#ff9d28' },
    { name: 'HomeAdvisor', icon: 'H', color: '#f47e3e' },
    { name: 'Zillow', icon: 'Z', color: '#0074e4' }
];

function Integrations() {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section id="integrations" className="integrations-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">🔗 Integrations</span>
                    <h2>Connect Your Review Platforms</h2>
                    <p>Seamlessly integrate with all major review platforms. One dashboard, all your reviews.</p>
                </div>

                <div
                    ref={ref}
                    className={`integrations-content ${isVisible ? 'animate-visible' : ''}`}
                >
                    <div className="integrations-grid">
                        {integrations.map((platform, index) => (
                            <div
                                key={platform.name}
                                className="integration-card glass-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div
                                    className="integration-icon"
                                    style={{ background: platform.color }}
                                >
                                    {platform.icon}
                                </div>
                                <div className="integration-info">
                                    <h3>{platform.name}</h3>
                                    <p>{platform.description}</p>
                                    <ul className="integration-features">
                                        {platform.features.map((feature, i) => (
                                            <li key={i}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <span className="integration-status connected">Connected</span>
                            </div>
                        ))}
                    </div>

                    <div className="coming-soon-section">
                        <h3>Coming Soon</h3>
                        <p>We're constantly adding new integrations. These platforms are next on our roadmap.</p>
                        <div className="coming-soon-grid">
                            {comingSoon.map((platform) => (
                                <div key={platform.name} className="coming-soon-item">
                                    <div
                                        className="coming-soon-icon"
                                        style={{ background: platform.color }}
                                    >
                                        {platform.icon}
                                    </div>
                                    <span>{platform.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="integration-cta glass-card">
                        <div className="cta-content">
                            <h3>Don't See Your Platform?</h3>
                            <p>Let us know which integrations you need. We're always expanding our platform support.</p>
                        </div>
                        <button className="btn btn-primary">Request Integration</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Integrations;
