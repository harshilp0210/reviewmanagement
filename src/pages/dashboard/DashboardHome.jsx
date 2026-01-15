import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './DashboardHome.css';

// Mock data
const stats = [
    { icon: '⭐', label: 'Avg Rating', value: '4.6', trend: '+0.3', trendUp: true, color: 'blue' },
    { icon: '📝', label: 'Total Reviews', value: '847', trend: '+24', trendUp: true, color: 'green' },
    { icon: '✅', label: 'Response Rate', value: '94%', trend: '+5%', trendUp: true, color: 'purple' },
    { icon: '⏱️', label: 'Avg Response Time', value: '2.4h', trend: '-1.2h', trendUp: true, color: 'orange' }
];

const recentReviews = [
    {
        id: 1,
        platform: 'google',
        author: 'Sarah Johnson',
        rating: 5,
        text: 'Absolutely wonderful experience! The staff was incredibly helpful and the room was spotless. Will definitely be returning!',
        time: '2 hours ago',
        replied: false
    },
    {
        id: 2,
        platform: 'yelp',
        author: 'Mike Chen',
        rating: 4,
        text: 'Great location and friendly service. The breakfast could use more variety but overall a solid stay.',
        time: '5 hours ago',
        replied: true
    },
    {
        id: 3,
        platform: 'facebook',
        author: 'Emily Davis',
        rating: 5,
        text: 'Best hotel in the area! Clean rooms, amazing pool, and the staff remembered my name on day two.',
        time: '1 day ago',
        replied: true
    },
    {
        id: 4,
        platform: 'google',
        author: 'Robert Wilson',
        rating: 2,
        text: 'Disappointed with my stay. The AC wasn\'t working properly and it took too long to get someone to fix it.',
        time: '1 day ago',
        replied: false
    }
];

const alerts = [
    { type: 'danger', icon: '⚠️', title: 'Negative Review Alert', desc: '1 new negative review needs your attention' },
    { type: 'warning', icon: '⏰', title: 'Pending Replies', desc: '3 reviews waiting for response over 24h' },
    { type: 'info', icon: '💡', title: 'Weekly Report Ready', desc: 'Your performance report is available' },
    { type: 'success', icon: '🎉', title: 'Rating Milestone', desc: 'You\'ve reached 4.5+ stars on Google!' }
];

function DashboardHome() {
    const { user } = useAuth();

    return (
        <div className="dashboard-home">
            {/* Header */}
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h1>Welcome back, {user?.name?.split(' ')[0] || 'User'}! 👋</h1>
                    <p>Here's what's happening with your reviews today.</p>
                </div>
                <div className="header-actions">
                    <select className="location-select">
                        <option>All Locations (3)</option>
                        <option>Sunset Motel - Downtown</option>
                        <option>Sunset Motel - Airport</option>
                        <option>Sunset Motel - Beach</option>
                    </select>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-card-header">
                            <div className={`stat-card-icon ${stat.color}`}>{stat.icon}</div>
                            <span className={`stat-trend ${stat.trendUp ? 'up' : 'down'}`}>
                                {stat.trendUp ? '↑' : '↓'} {stat.trend}
                            </span>
                        </div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="dashboard-grid">
                {/* Recent Reviews */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>📥 Recent Reviews</h3>
                        <Link to="/dashboard/inbox" className="card-action">View All →</Link>
                    </div>
                    <div className="reviews-list">
                        {recentReviews.map(review => (
                            <div key={review.id} className="review-item">
                                <div className={`review-platform ${review.platform}`}>
                                    {review.platform === 'google' ? 'G' : review.platform === 'yelp' ? 'Y' : 'f'}
                                </div>
                                <div className="review-content">
                                    <div className="review-header">
                                        <span className="review-author">{review.author}</span>
                                        <span className="review-rating">
                                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                        </span>
                                        <span className="review-time">{review.time}</span>
                                    </div>
                                    <p className="review-text">{review.text}</p>
                                    <div className="review-actions">
                                        {!review.replied && (
                                            <button className="btn btn-primary btn-sm">Reply with AI</button>
                                        )}
                                        {review.replied && (
                                            <span className="replied-badge">✓ Replied</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alerts & Quick Actions */}
                <div className="dashboard-sidebar-content">
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>🔔 Alerts</h3>
                        </div>
                        <div className="alerts-list">
                            {alerts.map((alert, index) => (
                                <div key={index} className={`alert-item ${alert.type}`}>
                                    <span className="alert-icon">{alert.icon}</span>
                                    <div className="alert-content">
                                        <div className="alert-title">{alert.title}</div>
                                        <div className="alert-desc">{alert.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-card quick-actions">
                        <div className="card-header">
                            <h3>⚡ Quick Actions</h3>
                        </div>
                        <div className="actions-grid">
                            <Link to="/dashboard/requests" className="action-btn">
                                <span>📧</span>
                                Send Review Request
                            </Link>
                            <Link to="/dashboard/inbox" className="action-btn">
                                <span>💬</span>
                                Reply to Reviews
                            </Link>
                            <Link to="/dashboard/analytics" className="action-btn">
                                <span>📊</span>
                                View Analytics
                            </Link>
                            <Link to="/dashboard/settings" className="action-btn">
                                <span>🔗</span>
                                Connect Platform
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardHome;
