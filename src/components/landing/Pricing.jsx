import { pricingPlans } from '../../data/mockData';
import './Pricing.css';

function Pricing() {
    return (
        <section id="pricing" className="pricing-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">💰 Pricing</span>
                    <h2>Simple, Transparent Pricing</h2>
                    <p>
                        Start free for 14 days. No credit card required. Cancel anytime.
                    </p>
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
                                <span className="price-amount">{plan.price}</span>
                                <span className="price-period">/month</span>
                            </div>

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
