import './Analytics.css';

const ratingData = [
    { month: 'Jul', rating: 3.8 },
    { month: 'Aug', rating: 4.0 },
    { month: 'Sep', rating: 4.1 },
    { month: 'Oct', rating: 4.3 },
    { month: 'Nov', rating: 4.5 },
    { month: 'Dec', rating: 4.6 }
];

const platformStats = [
    { platform: 'Google', reviews: 423, rating: 4.6, color: '#4285f4' },
    { platform: 'Yelp', reviews: 187, rating: 4.4, color: '#ff1a1a' },
    { platform: 'Facebook', reviews: 156, rating: 4.7, color: '#1877f2' },
    { platform: 'TripAdvisor', reviews: 81, rating: 4.5, color: '#00aa6c' }
];

const sentimentData = {
    positive: 72,
    neutral: 18,
    negative: 10
};

function Analytics() {
    const maxRating = Math.max(...ratingData.map(d => d.rating));
    const minRating = Math.min(...ratingData.map(d => d.rating)) - 0.5;

    return (
        <div className="analytics-page">
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h1>📈 Analytics</h1>
                    <p>Track your review performance and reputation metrics</p>
                </div>
                <select className="period-select">
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                    <option>Last 30 days</option>
                    <option>Last 7 days</option>
                </select>
            </div>

            <div className="analytics-grid">
                {/* Rating Trend Chart */}
                <div className="analytics-card full-width">
                    <h3>⭐ Rating Trend</h3>
                    <div className="chart-container">
                        <div className="chart-y-axis">
                            <span>5.0</span>
                            <span>4.5</span>
                            <span>4.0</span>
                            <span>3.5</span>
                            <span>3.0</span>
                        </div>
                        <div className="chart-bars">
                            {ratingData.map((data, index) => (
                                <div key={index} className="chart-bar-wrapper">
                                    <div
                                        className="chart-bar"
                                        style={{
                                            height: `${((data.rating - 3) / 2) * 100}%`
                                        }}
                                    >
                                        <span className="bar-value">{data.rating}</span>
                                    </div>
                                    <span className="bar-label">{data.month}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Platform Breakdown */}
                <div className="analytics-card">
                    <h3>📊 Platform Breakdown</h3>
                    <div className="platform-list">
                        {platformStats.map((platform, index) => (
                            <div key={index} className="platform-item">
                                <div
                                    className="platform-icon"
                                    style={{ background: platform.color }}
                                >
                                    {platform.platform.charAt(0)}
                                </div>
                                <div className="platform-info">
                                    <span className="platform-name">{platform.platform}</span>
                                    <span className="platform-reviews">{platform.reviews} reviews</span>
                                </div>
                                <div className="platform-rating">
                                    ⭐ {platform.rating}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sentiment Analysis */}
                <div className="analytics-card">
                    <h3>💬 Sentiment Analysis</h3>
                    <div className="sentiment-chart">
                        <div className="sentiment-donut">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#1a1a2e" strokeWidth="15" />
                                <circle
                                    cx="50" cy="50" r="40" fill="none"
                                    stroke="#2d8642" strokeWidth="15"
                                    strokeDasharray={`${sentimentData.positive * 2.51} 251`}
                                    transform="rotate(-90 50 50)"
                                />
                                <circle
                                    cx="50" cy="50" r="40" fill="none"
                                    stroke="#ffc107" strokeWidth="15"
                                    strokeDasharray={`${sentimentData.neutral * 2.51} 251`}
                                    strokeDashoffset={`-${sentimentData.positive * 2.51}`}
                                    transform="rotate(-90 50 50)"
                                />
                                <circle
                                    cx="50" cy="50" r="40" fill="none"
                                    stroke="#dc3545" strokeWidth="15"
                                    strokeDasharray={`${sentimentData.negative * 2.51} 251`}
                                    strokeDashoffset={`-${(sentimentData.positive + sentimentData.neutral) * 2.51}`}
                                    transform="rotate(-90 50 50)"
                                />
                            </svg>
                        </div>
                        <div className="sentiment-legend">
                            <div className="legend-item">
                                <span className="legend-dot positive"></span>
                                <span>Positive ({sentimentData.positive}%)</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-dot neutral"></span>
                                <span>Neutral ({sentimentData.neutral}%)</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-dot negative"></span>
                                <span>Negative ({sentimentData.negative}%)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Response Metrics */}
                <div className="analytics-card">
                    <h3>⏱️ Response Metrics</h3>
                    <div className="metrics-list">
                        <div className="metric-item">
                            <span className="metric-label">Average Response Time</span>
                            <span className="metric-value">2.4 hours</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-label">Response Rate</span>
                            <span className="metric-value">94%</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-label">Reviews This Month</span>
                            <span className="metric-value">+47</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-label">Rating Change</span>
                            <span className="metric-value positive">+0.3</span>
                        </div>
                    </div>
                </div>

                {/* Top Keywords */}
                <div className="analytics-card">
                    <h3>🏷️ Top Mentioned Keywords</h3>
                    <div className="keywords-cloud">
                        <span className="keyword large positive">clean</span>
                        <span className="keyword medium positive">friendly</span>
                        <span className="keyword large positive">location</span>
                        <span className="keyword small positive">comfortable</span>
                        <span className="keyword medium neutral">price</span>
                        <span className="keyword small negative">parking</span>
                        <span className="keyword medium positive">breakfast</span>
                        <span className="keyword small positive">staff</span>
                        <span className="keyword medium positive">quiet</span>
                        <span className="keyword small neutral">wifi</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
