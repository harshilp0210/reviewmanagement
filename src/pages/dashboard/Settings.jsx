import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Settings.css';

const connectedPlatforms = [
    { name: 'Google Business', icon: 'G', color: '#4285f4', connected: true, reviews: 423 },
    { name: 'Yelp', icon: 'Y', color: '#ff1a1a', connected: true, reviews: 187 },
    { name: 'Facebook', icon: 'f', color: '#1877f2', connected: true, reviews: 156 },
    { name: 'TripAdvisor', icon: 'T', color: '#00aa6c', connected: false, reviews: 0 }
];

const teamMembers = [
    { name: 'John Smith', email: 'john@sunsetmotel.com', role: 'Admin', avatar: 'JS' },
    { name: 'Sarah Johnson', email: 'sarah@sunsetmotel.com', role: 'Manager', avatar: 'SJ' },
    { name: 'Mike Chen', email: 'mike@sunsetmotel.com', role: 'Staff', avatar: 'MC' }
];

function Settings() {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('platforms');

    return (
        <div className="settings-page">
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h1>⚙️ Settings</h1>
                    <p>Manage your account, team, and integrations</p>
                </div>
            </div>

            <div className="settings-layout">
                {/* Settings Navigation */}
                <nav className="settings-nav">
                    <button
                        className={`settings-nav-btn ${activeTab === 'platforms' ? 'active' : ''}`}
                        onClick={() => setActiveTab('platforms')}
                    >
                        <span>🔗</span> Connected Platforms
                    </button>
                    <button
                        className={`settings-nav-btn ${activeTab === 'team' ? 'active' : ''}`}
                        onClick={() => setActiveTab('team')}
                    >
                        <span>👥</span> Team Members
                    </button>
                    <button
                        className={`settings-nav-btn ${activeTab === 'notifications' ? 'active' : ''}`}
                        onClick={() => setActiveTab('notifications')}
                    >
                        <span>🔔</span> Notifications
                    </button>
                    <button
                        className={`settings-nav-btn ${activeTab === 'billing' ? 'active' : ''}`}
                        onClick={() => setActiveTab('billing')}
                    >
                        <span>💳</span> Billing
                    </button>
                    <button
                        className={`settings-nav-btn ${activeTab === 'account' ? 'active' : ''}`}
                        onClick={() => setActiveTab('account')}
                    >
                        <span>👤</span> Account
                    </button>
                </nav>

                {/* Settings Content */}
                <div className="settings-content">
                    {activeTab === 'platforms' && (
                        <div className="settings-section">
                            <h3>Connected Platforms</h3>
                            <p className="section-desc">Manage your review platform connections</p>

                            <div className="platforms-grid">
                                {connectedPlatforms.map((platform, index) => (
                                    <div key={index} className="platform-card">
                                        <div className="platform-header">
                                            <div className="platform-icon" style={{ background: platform.color }}>
                                                {platform.icon}
                                            </div>
                                            <div>
                                                <h4>{platform.name}</h4>
                                                {platform.connected && (
                                                    <span className="platform-reviews">{platform.reviews} reviews synced</span>
                                                )}
                                            </div>
                                        </div>
                                        <button className={`btn ${platform.connected ? 'btn-ghost' : 'btn-primary'}`}>
                                            {platform.connected ? 'Disconnect' : 'Connect'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'team' && (
                        <div className="settings-section">
                            <div className="section-header">
                                <div>
                                    <h3>Team Members</h3>
                                    <p className="section-desc">Manage who has access to your account</p>
                                </div>
                                <button className="btn btn-primary">+ Invite Member</button>
                            </div>

                            <div className="team-list">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="team-member">
                                        <div className="member-avatar">{member.avatar}</div>
                                        <div className="member-info">
                                            <span className="member-name">{member.name}</span>
                                            <span className="member-email">{member.email}</span>
                                        </div>
                                        <span className={`member-role ${member.role.toLowerCase()}`}>{member.role}</span>
                                        <button className="btn btn-ghost btn-sm">Edit</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="settings-section">
                            <h3>Notification Preferences</h3>
                            <p className="section-desc">Choose how you want to be notified</p>

                            <div className="notification-settings">
                                <div className="notification-item">
                                    <div>
                                        <h4>New Review Alerts</h4>
                                        <p>Get notified when you receive a new review</p>
                                    </div>
                                    <label className="toggle">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                                <div className="notification-item">
                                    <div>
                                        <h4>Negative Review Alerts</h4>
                                        <p>Immediate notification for reviews 3 stars or below</p>
                                    </div>
                                    <label className="toggle">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                                <div className="notification-item">
                                    <div>
                                        <h4>Weekly Summary</h4>
                                        <p>Receive a weekly report of your review performance</p>
                                    </div>
                                    <label className="toggle">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                                <div className="notification-item">
                                    <div>
                                        <h4>Email Notifications</h4>
                                        <p>Send notifications to your email</p>
                                    </div>
                                    <label className="toggle">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'billing' && (
                        <div className="settings-section">
                            <h3>Billing & Subscription</h3>
                            <p className="section-desc">Manage your subscription and payment method</p>

                            <div className="billing-card">
                                <div className="current-plan">
                                    <span className="plan-badge">Professional</span>
                                    <h4>$79/month</h4>
                                    <ul>
                                        <li>✓ Up to 5 locations</li>
                                        <li>✓ AI-powered replies</li>
                                        <li>✓ Advanced analytics</li>
                                        <li>✓ Priority support</li>
                                    </ul>
                                    <button className="btn btn-secondary">Upgrade Plan</button>
                                </div>
                                <div className="payment-info">
                                    <h4>Payment Method</h4>
                                    <div className="payment-card">
                                        <span>💳</span>
                                        <span>•••• •••• •••• 4242</span>
                                        <span>Expires 12/26</span>
                                    </div>
                                    <button className="btn btn-ghost">Update Payment</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'account' && (
                        <div className="settings-section">
                            <h3>Account Settings</h3>
                            <p className="section-desc">Update your personal information</p>

                            <form className="account-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" defaultValue={user?.name || 'Demo User'} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" defaultValue={user?.email || 'demo@example.com'} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Business Name</label>
                                        <input type="text" defaultValue={user?.business || 'Sunset Motel'} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="tel" defaultValue="+1 (555) 123-4567" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Settings;
