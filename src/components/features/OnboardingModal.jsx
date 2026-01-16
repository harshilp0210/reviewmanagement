import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { businessCategories, platforms } from '../../data/mockData';
import './OnboardingModal.css';

function OnboardingModal({ onClose }) {
    const navigate = useNavigate();
    const { register, isLoading } = useAuth();
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        // Account Info
        email: '',
        password: '',
        confirmPassword: '',

        // Business Info
        businessName: '',
        category: '',
        locations: [{ name: '', address: '' }],
        connectedPlatforms: []
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setError('');
    };

    const handleLocationChange = (index, field, value) => {
        const newLocations = [...formData.locations];
        newLocations[index][field] = value;
        setFormData({ ...formData, locations: newLocations });
    };

    const addLocation = () => {
        setFormData({
            ...formData,
            locations: [...formData.locations, { name: '', address: '' }]
        });
    };

    const togglePlatform = (platformId) => {
        const current = formData.connectedPlatforms;
        if (current.includes(platformId)) {
            setFormData({
                ...formData,
                connectedPlatforms: current.filter(id => id !== platformId)
            });
        } else {
            setFormData({
                ...formData,
                connectedPlatforms: [...current, platformId]
            });
        }
    };

    const validateStep = () => {
        setError('');

        switch (step) {
            case 1: // Account
                if (!formData.email || !formData.password || !formData.confirmPassword) {
                    setError('Please fill in all fields');
                    return false;
                }
                if (formData.password !== formData.confirmPassword) {
                    setError('Passwords do not match');
                    return false;
                }
                if (formData.password.length < 6) {
                    setError('Password must be at least 6 characters');
                    return false;
                }
                return true;

            case 2: // Business
                if (!formData.businessName || !formData.category) {
                    setError('Please enter your business details');
                    return false;
                }
                return true;

            case 3: // Locations
                const validLocations = formData.locations.filter(l => l.name && l.address);
                if (validLocations.length === 0) {
                    setError('Please add at least one location');
                    return false;
                }
                return true;

            default:
                return true;
        }
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep(step + 1);
        }
    };

    const prevStep = () => setStep(step - 1);

    const handleComplete = async () => {
        try {
            setError('');
            await register(formData.email, formData.password, {
                businessName: formData.businessName,
                category: formData.category,
                locations: formData.locations,
                connectedPlatforms: formData.connectedPlatforms
            });
            onClose();
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon">👤</span>
                            <h3>Create your account</h3>
                            <p>Start your 14-day free trial. No credit card required.</p>
                        </div>

                        {error && <div className="form-error">{error}</div>}

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                className="input"
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Min. 6 chars"
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Confirm password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon">🏢</span>
                            <h3>Tell us about your business</h3>
                            <p>We'll personalize your experience based on your industry.</p>
                        </div>

                        {error && <div className="form-error">{error}</div>}

                        <div className="form-group">
                            <label>Business Name</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="e.g., Sunset Cafe"
                                value={formData.businessName}
                                onChange={(e) => handleInputChange('businessName', e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Business Category</label>
                            <select
                                className="input select"
                                value={formData.category}
                                onChange={(e) => handleInputChange('category', e.target.value)}
                            >
                                <option value="">Select your industry</option>
                                {businessCategories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon">📍</span>
                            <h3>Add your locations</h3>
                            <p>Add the locations where you receive reviews.</p>
                        </div>

                        {error && <div className="form-error">{error}</div>}

                        {formData.locations.map((loc, index) => (
                            <div key={index} className="location-form">
                                <div className="location-header">
                                    <span>Location {index + 1}</span>
                                    {index > 0 && (
                                        <button
                                            className="remove-btn"
                                            onClick={() => {
                                                const newLocs = formData.locations.filter((_, i) => i !== index);
                                                setFormData({ ...formData, locations: newLocs });
                                            }}
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Location name (e.g., Downtown)"
                                        value={loc.name}
                                        onChange={(e) => handleLocationChange(index, 'name', e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Address"
                                        value={loc.address}
                                        onChange={(e) => handleLocationChange(index, 'address', e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}

                        <button className="btn btn-ghost add-location-btn" onClick={addLocation}>
                            + Add Another Location
                        </button>
                    </div>
                );

            case 4:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon">🔗</span>
                            <h3>Connect your review platforms</h3>
                            <p>Select where you receive reviews (optional).</p>
                        </div>

                        <div className="platforms-grid">
                            {platforms.map(platform => (
                                <button
                                    key={platform.id}
                                    className={`platform-card ${formData.connectedPlatforms.includes(platform.id) ? 'connected' : ''}`}
                                    onClick={() => togglePlatform(platform.id)}
                                >
                                    <span
                                        className="platform-icon-large"
                                        style={{ background: `${platform.color}20`, color: platform.color }}
                                    >
                                        {platform.icon}
                                    </span>
                                    <span className="platform-name">{platform.name}</span>
                                    <span className="platform-status">
                                        {formData.connectedPlatforms.includes(platform.id) ? '✓ Selected' : 'Click to select'}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon success">🎉</span>
                            <h3>You're all set!</h3>
                            <p>Review the details below and create your account.</p>
                        </div>

                        {error && <div className="form-error">{error}</div>}

                        <div className="summary-card">
                            <div className="summary-item">
                                <span className="summary-label">Account</span>
                                <span className="summary-value">{formData.email}</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-label">Business</span>
                                <span className="summary-value">{formData.businessName}</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-label">Category</span>
                                <span className="summary-value">{formData.category}</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-label">Locations</span>
                                <span className="summary-value">{formData.locations.filter(l => l.name).length} location(s)</span>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal onboarding-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                {/* Progress */}
                <div className="onboarding-progress">
                    {[1, 2, 3, 4, 5].map(s => (
                        <div
                            key={s}
                            className={`progress-step ${s === step ? 'active' : ''} ${s < step ? 'completed' : ''}`}
                        >
                            <span className="progress-number">{s < step ? '✓' : s}</span>
                            <span className="progress-label">
                                {s === 1 && 'Account'}
                                {s === 2 && 'Business'}
                                {s === 3 && 'Locations'}
                                {s === 4 && 'Apps'}
                                {s === 5 && 'Finish'}
                            </span>
                        </div>
                    ))}
                </div>

                <div key={step}>
                    {renderStep()}
                </div>

                <div className="onboarding-actions">
                    {step > 1 && (
                        <button className="btn btn-ghost" onClick={prevStep} disabled={isLoading}>
                            Back
                        </button>
                    )}

                    {step < 5 ? (
                        <button className="btn btn-primary" onClick={nextStep}>
                            Continue
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={handleComplete}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account & Go to Dashboard'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OnboardingModal;
