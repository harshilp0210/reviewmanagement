import { testimonials } from '../../data/mockData';
import './Testimonials.css';

function Testimonials() {
    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <section className="testimonials-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">💬 Testimonials</span>
                    <h2>Loved by Businesses Everywhere</h2>
                    <p>
                        See how ReviewHub has helped businesses like yours improve their online reputation.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="testimonial-info">
                                    <span className="testimonial-name">{testimonial.name}</span>
                                    <span className="testimonial-business">{testimonial.business}</span>
                                </div>
                            </div>

                            <div className="testimonial-rating">
                                {renderStars(testimonial.rating)}
                            </div>

                            <p className="testimonial-text">"{testimonial.text}"</p>

                            <div className="testimonial-badge">
                                <span>✓ Verified Customer</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Widget Preview */}
                <div className="widget-preview glass-card">
                    <div className="widget-preview-header">
                        <h3>📦 Testimonials Widget</h3>
                        <p>Embed beautiful review displays on your website</p>
                    </div>

                    <div className="widget-demo">
                        <div className="widget-styles">
                            <button className="widget-style-btn active">Carousel</button>
                            <button className="widget-style-btn">Grid</button>
                            <button className="widget-style-btn">Badge</button>
                        </div>

                        <div className="widget-example">
                            <div className="widget-badge-example">
                                <div className="badge-rating">
                                    <span className="badge-stars">⭐ 4.7</span>
                                    <span className="badge-source">on Google</span>
                                </div>
                                <span className="badge-count">Based on 1,284 reviews</span>
                            </div>
                        </div>

                        <div className="embed-code">
                            <code>{'<script src="https://reviewhub.io/widget.js" data-id="abc123"></script>'}</code>
                            <button className="btn btn-ghost btn-sm">📋 Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
