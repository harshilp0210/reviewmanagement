import { useState } from 'react';
import './ContactForm.css';

function ContactForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setFormData({ name: '', email: '', company: '', message: '' });

        if (onSuccess) {
            onSuccess();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <span className="section-badge">📧 Contact</span>
                        <h2>Get in Touch</h2>
                        <p>
                            Have questions about ReviewManager? We're here to help.
                            Fill out the form and we'll get back to you within 24 hours.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div>
                                    <strong>Address</strong>
                                    <p>123 Business Ave, Suite 100<br />San Francisco, CA 94102</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <div>
                                    <strong>Phone</strong>
                                    <p>1-800-REVIEWS</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <p>openrize@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`input ${errors.name ? 'input-error' : ''}`}
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="error-text">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`input ${errors.email ? 'input-error' : ''}`}
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error-text">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="input"
                                placeholder="Your company name"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                className={`input textarea ${errors.message ? 'input-error' : ''}`}
                                placeholder="How can we help you?"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="error-text">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
