import './Footer.css';

function Footer({ onGetStarted }) {
    return (
        <footer className="footer">
            {/* CTA Section */}
            <div className="footer-cta">
                <div className="container">
                    <div className="cta-content glass-card">
                        <div className="cta-text">
                            <h2>Ready to Transform Your Online Reputation?</h2>
                            <p>Join 2,500+ businesses already using ReviewManager to dominate their local market.</p>
                        </div>
                        <div className="cta-actions">
                            <button className="btn btn-primary btn-lg" onClick={onGetStarted}>
                                Start Free Trial
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button className="btn btn-secondary btn-lg">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src="/logo.png" alt="ReviewManager" className="brand-logo footer-brand-logo" />
                            </div>
                            <p className="footer-tagline">
                                The all-in-one platform for managing your online reviews and building a stellar reputation.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link">𝕏</a>
                                <a href="#" className="social-link">in</a>
                                <a href="#" className="social-link">f</a>
                            </div>
                        </div>

                        <div className="footer-links-group">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Integrations</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Case Studies</a></li>
                                <li><a href="#">Webinars</a></li>
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">GDPR</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2024 ReviewManager. All rights reserved.</p>
                        <p className="footer-made">Made with 💜 for businesses everywhere</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
