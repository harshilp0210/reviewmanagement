import { useScrollAnimation } from '../../hooks/useAnimations.jsx';
import { AnimatedCounter } from '../../hooks/useAnimations.jsx';
import './Benefits.css';

const stats = [
    { value: 9, suffix: '%', label: 'Revenue increase per star gained on Yelp' },
    { value: 31, suffix: '%', label: 'More spending from customers who read positive reviews' },
    { value: 10, suffix: 'hrs', label: 'Saved per week on review management' },
    { value: 3, suffix: 'x', label: 'More reviews with automated requests' }
];

const benefits = [
    {
        icon: '💰',
        title: 'Increase Revenue',
        description: 'Businesses with higher ratings earn significantly more. A single star improvement on Google can increase revenue by 5-9%.',
        stats: '+23% average booking increase',
        color: 'green'
    },
    {
        icon: '⏱️',
        title: 'Save Hours Every Week',
        description: 'Stop checking multiple platforms manually. Get all your reviews in one inbox and respond with AI-powered suggestions in seconds.',
        stats: '10+ hours saved weekly',
        color: 'blue'
    },
    {
        icon: '🛡️',
        title: 'Protect Your Reputation',
        description: 'Get instant alerts for negative reviews. Respond professionally before problems escalate or affect your ratings.',
        stats: '2 hour avg response time',
        color: 'purple'
    },
    {
        icon: '📈',
        title: 'Get More 5-Star Reviews',
        description: 'Automatically request reviews from happy customers via SMS and email. Smart timing means higher response rates.',
        stats: '340% more reviews',
        color: 'orange'
    },
    {
        icon: '🔍',
        title: 'Rank Higher on Google',
        description: 'More reviews + higher ratings = better local SEO. Show up first when customers search for businesses like yours.',
        stats: 'Top 3 local ranking',
        color: 'teal'
    },
    {
        icon: '🎯',
        title: 'Understand Your Customers',
        description: 'AI-powered sentiment analysis reveals what customers love and what needs improvement. Make data-driven decisions.',
        stats: 'Real-time insights',
        color: 'pink'
    }
];

const beforeAfter = {
    before: {
        title: 'Without ReviewManager',
        points: [
            '😫 Check Google, Yelp, Facebook separately',
            '⏰ 15+ minutes to write each reply',
            '❌ Miss negative reviews for days',
            '📉 Low review count hurts rankings',
            '😰 Stressed about online reputation'
        ]
    },
    after: {
        title: 'With ReviewManager',
        points: [
            '✅ All reviews in ONE dashboard',
            '⚡ AI writes replies in seconds',
            '🔔 Instant negative review alerts',
            '📈 3x more reviews automatically',
            '😊 Confidence in your online presence'
        ]
    }
};

function Benefits() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [statsRef, statsVisible] = useScrollAnimation(0.3);

    return (
        <section id="benefits" className="benefits-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">💡 Why ReviewManager</span>
                    <h2>Turn Reviews Into Revenue</h2>
                    <p>See how ReviewManager helps motels, stores, and restaurants grow their business through better review management.</p>
                </div>

                {/* Stats Bar */}
                <div
                    ref={statsRef}
                    className={`benefits-stats ${statsVisible ? 'animate-visible' : ''}`}
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="benefit-stat">
                            <span className="benefit-stat-value">
                                {statsVisible && <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1500} />}
                            </span>
                            <span className="benefit-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Benefits Grid */}
                <div
                    ref={ref}
                    className={`benefits-grid ${isVisible ? 'animate-visible' : ''}`}
                >
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`benefit-card glass-card benefit-${benefit.color}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                            <span className="benefit-stat-badge">{benefit.stats}</span>
                        </div>
                    ))}
                </div>

                {/* Before/After Comparison */}
                <div className="before-after-section">
                    <h3>The Difference is Clear</h3>
                    <div className="before-after-grid">
                        <div className="before-card">
                            <h4>{beforeAfter.before.title}</h4>
                            <ul>
                                {beforeAfter.before.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="after-card">
                            <h4>{beforeAfter.after.title}</h4>
                            <ul>
                                {beforeAfter.after.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Success Story */}
                <div className="success-story glass-card">
                    <div className="story-content">
                        <span className="story-label">Success Story</span>
                        <h3>"We went from 3.2 to 4.6 stars in just 4 months"</h3>
                        <p>
                            Sunset Motel was struggling with a low rating and few reviews. After implementing ReviewManager,
                            they increased their review count by 300%, improved response time from 5 days to 2 hours,
                            and saw a 28% increase in bookings.
                        </p>
                        <div className="story-author">
                            <div className="author-avatar">JM</div>
                            <div>
                                <strong>James Mitchell</strong>
                                <span>Owner, Sunset Motel</span>
                            </div>
                        </div>
                    </div>
                    <div className="story-stats">
                        <div className="story-stat">
                            <span className="stat-before">3.2</span>
                            <span className="stat-arrow">→</span>
                            <span className="stat-after">4.6</span>
                            <span className="stat-label">Star Rating</span>
                        </div>
                        <div className="story-stat">
                            <span className="stat-before">45</span>
                            <span className="stat-arrow">→</span>
                            <span className="stat-after">180</span>
                            <span className="stat-label">Total Reviews</span>
                        </div>
                        <div className="story-stat">
                            <span className="stat-before">20%</span>
                            <span className="stat-arrow">→</span>
                            <span className="stat-after">100%</span>
                            <span className="stat-label">Response Rate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
