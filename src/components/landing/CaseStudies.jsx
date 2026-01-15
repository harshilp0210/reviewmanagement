import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useAnimations.jsx';
import './CaseStudies.css';

const caseStudies = [
    {
        id: 1,
        business: 'Bella Italian Kitchen',
        industry: 'Restaurant',
        logo: '🍝',
        location: 'Austin, TX',
        image: null,
        challenge: 'Low review volume and slow response times were hurting their online reputation.',
        solution: 'Implemented automated review requests and AI-powered responses.',
        results: [
            { metric: 'Rating Increase', value: '+0.8', unit: 'stars' },
            { metric: 'New Reviews', value: '340%', unit: 'more' },
            { metric: 'Response Time', value: '2 hrs', unit: 'avg' }
        ],
        quote: 'ReviewManager transformed how we handle customer feedback. Our 4.8 rating speaks for itself!',
        author: 'Maria Santos',
        role: 'Owner'
    },
    {
        id: 2,
        business: 'Elite Auto Care',
        industry: 'Automotive',
        logo: '🚗',
        location: 'Denver, CO',
        image: null,
        challenge: 'Negative reviews were prominent and going unanswered for weeks.',
        solution: 'Set up instant alerts and used templates to respond within hours.',
        results: [
            { metric: 'Rating Increase', value: '+1.2', unit: 'stars' },
            { metric: 'Response Rate', value: '100%', unit: 'reviews' },
            { metric: 'Customer Return', value: '45%', unit: 'increase' }
        ],
        quote: 'We went from 3.1 to 4.3 stars in just 6 months. The ROI has been incredible.',
        author: 'James Mitchell',
        role: 'General Manager'
    },
    {
        id: 3,
        business: 'Serenity Day Spa',
        industry: 'Wellness',
        logo: '💆',
        location: 'Miami, FL',
        image: null,
        challenge: 'Great service but customers rarely left reviews online.',
        solution: 'Implemented QR codes and SMS follow-ups after appointments.',
        results: [
            { metric: 'Monthly Reviews', value: '50+', unit: 'new' },
            { metric: 'Google Ranking', value: '#1', unit: 'local' },
            { metric: 'New Bookings', value: '35%', unit: 'increase' }
        ],
        quote: 'We\'re now the top-rated spa in our area. Customers find us through Google constantly.',
        author: 'Lisa Chen',
        role: 'Founder'
    }
];

function CaseStudies() {
    const [activeCase, setActiveCase] = useState(0);
    const [ref, isVisible] = useScrollAnimation(0.1);

    const currentCase = caseStudies[activeCase];

    return (
        <section id="case-studies" className="case-studies-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">📈 Case Studies</span>
                    <h2>Real Businesses, Real Results</h2>
                    <p>See how businesses like yours are growing with ReviewManager.</p>
                </div>

                <div
                    ref={ref}
                    className={`case-studies-content ${isVisible ? 'animate-visible' : ''}`}
                >
                    {/* Business Selector */}
                    <div className="case-selector">
                        {caseStudies.map((study, index) => (
                            <button
                                key={study.id}
                                className={`case-tab ${activeCase === index ? 'active' : ''}`}
                                onClick={() => setActiveCase(index)}
                            >
                                <span className="case-tab-logo">{study.logo}</span>
                                <div className="case-tab-info">
                                    <span className="case-tab-name">{study.business}</span>
                                    <span className="case-tab-industry">{study.industry}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Case Study Detail */}
                    <div className="case-detail glass-card">
                        <div className="case-header">
                            <div className="case-business">
                                <span className="case-logo">{currentCase.logo}</span>
                                <div>
                                    <h3>{currentCase.business}</h3>
                                    <span className="case-location">📍 {currentCase.location}</span>
                                </div>
                            </div>
                            <span className="case-industry-badge">{currentCase.industry}</span>
                        </div>

                        <div className="case-body">
                            <div className="case-section">
                                <h4>The Challenge</h4>
                                <p>{currentCase.challenge}</p>
                            </div>

                            <div className="case-section">
                                <h4>The Solution</h4>
                                <p>{currentCase.solution}</p>
                            </div>

                            <div className="case-results">
                                <h4>The Results</h4>
                                <div className="results-grid">
                                    {currentCase.results.map((result, index) => (
                                        <div key={index} className="result-card">
                                            <span className="result-value">{result.value}</span>
                                            <span className="result-unit">{result.unit}</span>
                                            <span className="result-metric">{result.metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="case-quote">
                                <blockquote>"{currentCase.quote}"</blockquote>
                                <div className="quote-author">
                                    <div className="author-avatar">{currentCase.author.charAt(0)}</div>
                                    <div>
                                        <strong>{currentCase.author}</strong>
                                        <span>{currentCase.role}, {currentCase.business}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudies;
