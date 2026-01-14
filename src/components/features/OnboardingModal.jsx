import { useState } from 'react';
import { businessCategories, platforms, locations } from '../../data/mockData';
import './OnboardingModal.css';

function OnboardingModal({ onClose }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: '',
        category: '',
        locations: [{ name: '', address: '' }],
        connectedPlatforms: []
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
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

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon">🏢</span>
                            <h3>Tell us about your business</h3>
                            <p>We'll personalize your experience based on your industry.</p>
                        </div>

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

            case 2:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon">📍</span>
                            <h3>Add your locations</h3>
                            <p>Add one or more locations where you receive reviews.</p>
                        </div>

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

            case 3:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon">🔗</span>
                            <h3>Connect your review platforms</h3>
                            <p>Select the platforms where you receive reviews. You can add more later.</p>
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

            case 4:
                return (
                    <div className="step-content">
                        <div className="step-header">
                            <span className="step-icon success">🎉</span>
                            <h3>You're all set!</h3>
                            <p>Your ReviewHub account is ready. Let's start managing your reputation.</p>
                        </div>

                        <div className="summary-card">
                            <div className="summary-item">
                                <span className="summary-label">Business</span>
                                <span className="summary-value">{formData.businessName || 'Not provided'}</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-label">Category</span>
                                <span className="summary-value">{formData.category || 'Not selected'}</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-label">Locations</span>
                                <span className="summary-value">{formData.locations.filter(l => l.name).length} location(s)</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-label">Platforms</span>
                                <span className="summary-value">{formData.connectedPlatforms.length} connected</span>
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
                    {[1, 2, 3, 4].map(s => (
                        <div
                            key={s}
                            className={`progress-step ${s === step ? 'active' : ''} ${s < step ? 'completed' : ''}`}
                        >
                            <span className="progress-number">{s < step ? '✓' : s}</span>
                            <span className="progress-label">
                                {s === 1 && 'Business'}
                                {s === 2 && 'Locations'}
                                {s === 3 && 'Platforms'}
                                {s === 4 && 'Done'}
                            </span>
                        </div>
                    ))}
                </div>

                {renderStep()}

                <div className="onboarding-actions">
                    {step > 1 && step < 4 && (
                        <button className="btn btn-ghost" onClick={prevStep}>
                            Back
                        </button>
                    )}
                    {step < 4 ? (
                        <button className="btn btn-primary" onClick={nextStep}>
                            Continue
                        </button>
                    ) : (
                        <button className="btn btn-primary" onClick={onClose}>
                            Go to Dashboard
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OnboardingModal;
