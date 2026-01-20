import { useState } from 'react';
import { pricingPlans } from '../../data/mockData';
import './Pricing.css';

function Pricing() {
    const [billing, setBilling] = useState('monthly');

    return (
        <section id="pricing" className="pricing-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">💰 Pricing</span>
                    <h2>Simple, Transparent Pricing</h2>
                    <p>
                        Start free for 14 days. No credit card required. Cancel anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div className="billing-toggle-container">
                        <span className={`billing-label ${billing === 'monthly' ? 'active' : ''}`}>Monthly</span>
                        <button
                            className={`billing-toggle-btn ${billing === 'yearly' ? 'active' : ''}`}
                            onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
                            aria-label="Toggle billing cycle"
                        >
                            <span className="toggle-handle"></span>
                        </button>
                        <span className={`billing-label ${billing === 'yearly' ? 'active' : ''}`}>
                            Yearly <span className="save-badge">Save 20%</span>
                        </span>
                    </div>
                </div>

                <div className="pricing-grid">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`pricing-card glass-card ${plan.popular ? 'popular' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {plan.popular && (
                                <div className="popular-badge">Most Popular</div>
                            )}

                            <div className="pricing-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <div className="plan-price">
                                <span className="price-currency">$</span>
                                <span className="price-amount">
                                    {billing === 'yearly' ? Math.floor(plan.price * 0.8) : plan.price}
                                </span>
                                <span className="price-period">/{billing === 'yearly' ? 'mo' : 'month'}</span>
                            </div>

                            {billing === 'yearly' && (
                                <div className="billed-yearly-text">
                                    Billed ${Math.floor(plan.price * 0.8) * 12} yearly
                                </div>
                            )}

                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="feature-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-lg`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="pricing-footer">
                    <p>
                        All plans include: 🔒 SSL encryption • 📊 Analytics dashboard • 📧 Email support
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
