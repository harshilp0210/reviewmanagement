import Pricing from '../components/landing/Pricing';
import ContactForm from '../components/landing/ContactForm';
import FAQ from '../components/landing/FAQ';
import './PageStyles.css';

function PricingPage({ onSuccess }) {
    return (
        <div className="page-container">
            <Pricing />
            <ContactForm onSuccess={onSuccess} />
            <FAQ />
        </div>
    );
}

export default PricingPage;
