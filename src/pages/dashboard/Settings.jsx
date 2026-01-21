import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../supabaseClient';
import { useToast } from '../../components/ui/Toast';
import './Settings.css';

const connectedPlatforms = [
    { name: 'Google Business', icon: 'G', color: '#4285f4', connected: false, reviews: 0 },
    { name: 'Yelp', icon: 'Y', color: '#ff1a1a', connected: false, reviews: 0 },
];

function Settings() {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('brand'); // Default to Brand
    const [orgData, setOrgData] = useState({ name: '', brand_voice: 'friendly' });
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    // Fetch Organization Data
    useEffect(() => {
        const fetchOrg = async () => {
            if (!user) return;
            try {
                // Get user's org via profile
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('org_id')
                    .eq('id', user.id)
                    .single();

                if (profile?.org_id) {
                    const { data: org } = await supabase
                        .from('organizations')
                        .select('*')
                        .eq('id', profile.org_id)
                        .single();

                    if (org) {
                        setOrgData({
                            id: org.id,
                            name: org.name,
                            brand_voice: org.settings?.brand_voice || 'friendly'
                        });
                    }
                }
            } catch (err) {
                console.error("Error loading settings:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrg();
    }, [user]);

    const handleSaveBrand = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('organizations')
                .update({
                    name: orgData.name,
                    settings: { brand_voice: orgData.brand_voice }
                })
                .eq('id', orgData.id);

            if (error) throw error;
            toast.success("Settings Saved! 💾");
        } catch (error) {
            toast.error("Failed to save settings.");
        }
    };

    if (loading) return <div className="p-8 text-center text-white">Loading Settings...</div>;

    return (
        <div className="settings-page">
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h1>⚙️ Settings</h1>
                    <p>Manage your organization and preferences</p>
                </div>
            </div>

            <div className="settings-layout">
                {/* Settings Navigation */}
                <nav className="settings-nav">
                    <button
                        className={`settings-nav-btn ${activeTab === 'brand' ? 'active' : ''}`}
                        onClick={() => setActiveTab('brand')}
                    >
                        <span>🏢</span> Brand & Voice
                    </button>
                    <button
                        className={`settings-nav-btn ${activeTab === 'platforms' ? 'active' : ''}`}
                        onClick={() => setActiveTab('platforms')}
                    >
                        <span>🔗</span> Integrations
                    </button>
                    <button
                        className={`settings-nav-btn ${activeTab === 'account' ? 'active' : ''}`}
                        onClick={() => setActiveTab('account')}
                    >
                        <span>👤</span> My Account
                    </button>
                </nav>

                {/* Settings Content */}
                <div className="settings-content">

                    {/* Brand Voice Settings (Real DB Config) */}
                    {activeTab === 'brand' && (
                        <div className="settings-section">
                            <div className="section-header">
                                <h3>Brand Settings</h3>
                                <p className="section-desc">Customize how AI responds to your reviews.</p>
                            </div>

                            <form className="account-form" onSubmit={handleSaveBrand}>
                                <div className="form-group">
                                    <label>Business Name</label>
                                    <input
                                        type="text"
                                        value={orgData.name}
                                        onChange={(e) => setOrgData({ ...orgData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>AI Brand Voice</label>
                                    <select
                                        value={orgData.brand_voice}
                                        onChange={(e) => setOrgData({ ...orgData, brand_voice: e.target.value })}
                                        className="settings-select"
                                    >
                                        <option value="professional">Professional & Formal</option>
                                        <option value="friendly">Friendly & Casual</option>
                                        <option value="humorous">Witty & Humorous</option>
                                        <option value="empathetic">Empathetic & Apologetic</option>
                                    </select>
                                    <p className="field-hint">This controls the tone of drafted replies.</p>
                                </div>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </form>
                        </div>
                    )}

                    {activeTab === 'platforms' && (
                        <div className="settings-section">
                            <h3>Connected Platforms</h3>
                            <p className="section-desc">Connect external review sources.</p>
                            <div className="platforms-grid">
                                {connectedPlatforms.map((platform, index) => (
                                    <div key={index} className="platform-card">
                                        <div className="platform-header">
                                            <div className="platform-icon" style={{ background: platform.color }}>
                                                {platform.icon}
                                            </div>
                                            <div>
                                                <h4>{platform.name}</h4>
                                                <span className="platform-status">
                                                    {platform.connected ? 'Connected' : 'Not Connected'}
                                                </span>
                                            </div>
                                        </div>
                                        <button className={`btn ${platform.connected ? 'btn-ghost' : 'btn-secondary'}`}>
                                            {platform.connected ? 'Manage' : 'Connect'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'account' && (
                        <div className="settings-section">
                            <h3>My Account</h3>
                            <p className="section-desc">Your personal login details.</p>
                            <div className="account-info-card">
                                <div className="info-row">
                                    <label>Email ID</label>
                                    <span>{user?.email}</span>
                                </div>
                                <div className="info-row">
                                    <label>User ID</label>
                                    <span className="mono">{user?.id}</span>
                                </div>
                                <div className="info-row">
                                    <label>Role</label>
                                    <span className="role-badge">Admin</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Settings;
