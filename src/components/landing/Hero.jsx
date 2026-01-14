import './Hero.css';

function Hero({ onGetStarted }) {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-badge animate-fade-in">
                    <span className="hero-badge-icon">🚀</span>
                    <span>ReviewManager: Trusted by 2,500+ businesses</span>
                </div>

                <h1 className="hero-title animate-fade-in">
                    All your reviews in <span className="gradient-text">one inbox</span>.
                    <br />
                    Respond faster. Get more <span className="gradient-text">5-stars</span>.
                </h1>

                <p className="hero-subtitle animate-fade-in">
                    Manage Google, Yelp, Facebook & TripAdvisor reviews from a single dashboard.
                    Use AI-powered replies to respond in seconds, not hours.
                </p>

                <div className="hero-actions animate-fade-in">
                    <button className="btn btn-primary btn-lg" onClick={onGetStarted}>
                        Start Free Trial
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className="btn btn-secondary btn-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                <div className="hero-platforms animate-fade-in">
                    <span className="hero-platforms-label">Integrates with:</span>
                    <div className="platform-icons">
                        <div className="platform-icon google">G</div>
                        <div className="platform-icon yelp">Y</div>
                        <div className="platform-icon facebook">f</div>
                        <div className="platform-icon tripadvisor">T</div>
                        <div className="platform-icon more">+4</div>
                    </div>
                </div>
            </div>

            <div className="hero-preview animate-fade-in">
                <div className="preview-window glass-card">
                    <div className="preview-header">
                        <div className="preview-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <span className="preview-title">ReviewManager Dashboard</span>
                    </div>
                    <div className="preview-content">
                        <div className="preview-sidebar">
                            <div className="preview-nav-item active">📥 Inbox</div>
                            <div className="preview-nav-item">📊 Analytics</div>
                            <div className="preview-nav-item">📱 Request</div>
                            <div className="preview-nav-item">⚙️ Settings</div>
                        </div>
                        <div className="preview-main">
                            <div className="preview-review glass-card">
                                <div className="preview-review-header">
                                    <span className="preview-platform google">G</span>
                                    <div>
                                        <strong>Sarah Johnson</strong>
                                        <div className="preview-stars">⭐⭐⭐⭐⭐</div>
                                    </div>
                                    <span className="preview-time">2h ago</span>
                                </div>
                                <p className="preview-review-text">
                                    "Absolutely amazing experience! The staff was incredibly friendly..."
                                </p>
                                <div className="preview-actions">
                                    <button className="preview-btn">✨ AI Reply</button>
                                    <button className="preview-btn secondary">Reply</button>
                                </div>
                            </div>
                            <div className="preview-review glass-card faded">
                                <div className="preview-review-header">
                                    <span className="preview-platform yelp">Y</span>
                                    <div>
                                        <strong>Mike Chen</strong>
                                        <div className="preview-stars">⭐⭐⭐⭐</div>
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

export default Hero;
