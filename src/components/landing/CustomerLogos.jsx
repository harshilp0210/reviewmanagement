import { useScrollAnimation } from '../../hooks/useAnimations.jsx';
import './CustomerLogos.css';

const customers = [
    { name: 'Sunset Cafe', industry: 'Restaurant' },
    { name: 'Elite Auto', industry: 'Automotive' },
    { name: 'Fresh Dental', industry: 'Healthcare' },
    { name: 'Urban Spa', industry: 'Wellness' },
    { name: 'Peak Fitness', industry: 'Fitness' },
    { name: 'Home Pro', industry: 'Services' },
    { name: 'Legal Edge', industry: 'Professional' },
    { name: 'Pet Paradise', industry: 'Pet Care' },
];

function CustomerLogos() {
    const [ref, isVisible] = useScrollAnimation(0.2);

    return (
        <section className="customer-logos-section">
            <div className="container">
                <div
                    ref={ref}
                    className={`customer-logos-content ${isVisible ? 'animate-visible' : ''}`}
                >
                    <p className="customer-logos-label">
                        Trusted by <strong>2,500+</strong> businesses across industries
                    </p>

                    <div className="customer-logos-track">
                        <div className="customer-logos-scroll">
                            {[...customers, ...customers].map((customer, index) => (
                                <div key={index} className="customer-logo-item">
                                    <div className="customer-logo-placeholder">
                                        <span className="customer-initial">
                                            {customer.name.charAt(0)}
                                        </span>
                                    </div>
                                    <span className="customer-name">{customer.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomerLogos;
