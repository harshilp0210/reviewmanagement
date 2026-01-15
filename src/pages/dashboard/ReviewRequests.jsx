import { useState } from 'react';
import './ReviewRequests.css';

function ReviewRequests() {
    const [activeTab, setActiveTab] = useState('campaigns');

    return (
        <div className="requests-page">
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h1>📧 Review Requests</h1>
                    <p>Request reviews from your happy customers via SMS, email, or QR code</p>
                </div>
                <button className="btn btn-primary">+ New Campaign</button>
            </div>

            {/* Tabs */}
            <div className="requests-tabs">
                <button
                    className={`tab-btn ${activeTab === 'campaigns' ? 'active' : ''}`}
                    onClick={() => setActiveTab('campaigns')}
                >
                    Campaigns
                </button>
                <button
                    className={`tab-btn ${activeTab === 'qrcode' ? 'active' : ''}`}
                    onClick={() => setActiveTab('qrcode')}
                >
                    QR Codes
                </button>
                <button
                    className={`tab-btn ${activeTab === 'templates' ? 'active' : ''}`}
                    onClick={() => setActiveTab('templates')}
                >
                    Templates
                </button>
            </div>

            {activeTab === 'campaigns' && (
                <div className="campaigns-section">
                    {/* Stats */}
                    <div className="requests-stats">
                        <div className="request-stat">
                            <span className="stat-value">1,247</span>
                            <span className="stat-label">Requests Sent</span>
                        </div>
                        <div className="request-stat">
                            <span className="stat-value">38%</span>
                            <span className="stat-label">Open Rate</span>
                        </div>
                        <div className="request-stat">
                            <span className="stat-value">12%</span>
                            <span className="stat-label">Conversion Rate</span>
                        </div>
                        <div className="request-stat">
                            <span className="stat-value">149</span>
                            <span className="stat-label">Reviews Generated</span>
                        </div>
                    </div>

                    {/* Campaigns List */}
                    <div className="campaigns-list">
                        <div className="campaign-item">
                            <div className="campaign-info">
                                <h4>Post-Checkout Follow-up</h4>
                                <p>Automated SMS sent 24h after checkout</p>
                                <span className="campaign-status active">Active</span>
                            </div>
                            <div className="campaign-stats">
                                <div><strong>523</strong> sent</div>
                                <div><strong>42%</strong> opened</div>
                                <div><strong>15%</strong> converted</div>
                            </div>
                            <button className="btn btn-ghost">Edit</button>
                        </div>

                        <div className="campaign-item">
                            <div className="campaign-info">
                                <h4>Monthly Email Newsletter</h4>
                                <p>Email to past guests asking for feedback</p>
                                <span className="campaign-status active">Active</span>
                            </div>
                            <div className="campaign-stats">
                                <div><strong>412</strong> sent</div>
                                <div><strong>28%</strong> opened</div>
                                <div><strong>8%</strong> converted</div>
                            </div>
                            <button className="btn btn-ghost">Edit</button>
                        </div>

                        <div className="campaign-item">
                            <div className="campaign-info">
                                <h4>VIP Guest Program</h4>
                                <p>Special request for repeat customers</p>
                                <span className="campaign-status paused">Paused</span>
                            </div>
                            <div className="campaign-stats">
                                <div><strong>312</strong> sent</div>
                                <div><strong>52%</strong> opened</div>
                                <div><strong>22%</strong> converted</div>
                            </div>
                            <button className="btn btn-ghost">Edit</button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'qrcode' && (
                <div className="qrcode-section">
                    <div className="qr-generator">
                        <div className="qr-preview">
                            <div className="qr-placeholder">
                                <svg width="200" height="200" viewBox="0 0 200 200">
                                    <rect width="200" height="200" fill="#1a1a2e" />
                                    <rect x="20" y="20" width="60" height="60" fill="#fff" />
                                    <rect x="120" y="20" width="60" height="60" fill="#fff" />
                                    <rect x="20" y="120" width="60" height="60" fill="#fff" />
                                    <rect x="90" y="90" width="20" height="20" fill="#fff" />
                                    <rect x="120" y="120" width="60" height="60" fill="#fff" />
                                </svg>
                            </div>
                            <p>Scan to leave a review!</p>
                        </div>
                        <div className="qr-options">
                            <h4>Customize Your QR Code</h4>
                            <div className="form-group">
                                <label>Redirect to:</label>
                                <select>
                                    <option>Google Reviews</option>
                                    <option>Yelp</option>
                                    <option>Facebook</option>
                                    <option>Review Selection Page</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Location:</label>
                                <select>
                                    <option>Sunset Motel - Downtown</option>
                                    <option>Sunset Motel - Airport</option>
                                    <option>Sunset Motel - Beach</option>
                                </select>
                            </div>
                            <div className="qr-actions">
                                <button className="btn btn-primary">Download PNG</button>
                                <button className="btn btn-secondary">Download PDF</button>
                                <button className="btn btn-ghost">Print</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'templates' && (
                <div className="templates-section">
                    <div className="template-card">
                        <div className="template-header">
                            <span className="template-type">📱 SMS</span>
                            <button className="btn btn-ghost btn-sm">Edit</button>
                        </div>
                        <div className="template-content">
                            <p>Hi {'{name}'}, thank you for staying at {'{business}'}! We'd love to hear about your experience. Leave us a quick review: {'{link}'}</p>
                        </div>
                    </div>

                    <div className="template-card">
                        <div className="template-header">
                            <span className="template-type">📧 Email</span>
                            <button className="btn btn-ghost btn-sm">Edit</button>
                        </div>
                        <div className="template-content">
                            <p><strong>Subject: How was your stay at {'{business}'}?</strong></p>
                            <p>Dear {'{name}'}, We hope you had a wonderful experience with us. Your feedback helps us improve and helps others discover our services...</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ReviewRequests;
