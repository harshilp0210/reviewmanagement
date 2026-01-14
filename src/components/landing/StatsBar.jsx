import { dashboardStats } from '../../data/mockData';
import { AnimatedCounter, useScrollAnimation } from '../../hooks/useAnimations.jsx';
import './StatsBar.css';

function StatsBar() {
    const [ref, isVisible] = useScrollAnimation(0.3);

    return (
        <section className="stats-bar" ref={ref}>
            <div className="container">
                <div className={`stats-grid ${isVisible ? 'animate-visible' : ''}`}>
                    <div className="stat-card glass-card">
                        <div className="stat-icon">⭐</div>
                        <div className="stat-content">
                            <span className="stat-value">
                                <AnimatedCounter value={47} suffix="" duration={1500} />
                                <span className="stat-decimal">.{dashboardStats.averageRating.toString().split('.')[1] || '0'}</span>
                            </span>
                            <span className="stat-label">Average Rating</span>
                        </div>
                        <div className="stat-trend positive">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17l5-5 5 5M7 7l5 5 5-5" />
                            </svg>
                            +0.3 this month
                        </div>
                    </div>

                    <div className="stat-card glass-card">
                        <div className="stat-icon">⚡</div>
                        <div className="stat-content">
                            <span className="stat-value">
                                <AnimatedCounter value={18} suffix="" duration={1500} />
                                <span className="stat-decimal"> hrs</span>
                            </span>
                            <span className="stat-label">Avg Response Time</span>
                        </div>
                        <div className="stat-trend positive">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17l5-5 5 5" />
                            </svg>
                            65% faster
                        </div>
                    </div>

                    <div className="stat-card glass-card">
                        <div className="stat-icon">📈</div>
                        <div className="stat-content">
                            <span className="stat-value">
                                +<AnimatedCounter value={dashboardStats.reviewGrowth} suffix="%" duration={1500} />
                            </span>
                            <span className="stat-label">Review Growth</span>
                        </div>
                        <div className="stat-trend positive">
                            <AnimatedCounter value={dashboardStats.thisWeekReviews} duration={1500} /> reviews this week
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsBar;
