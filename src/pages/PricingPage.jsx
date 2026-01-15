import Pricing from '../components/landing/Pricing';
import ContactForm from '../components/landing/ContactForm';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function PricingPage({ onSuccess, onGetStarted }) {
    return (
        <div className="page-container">
            <Pricing />
            <ContactForm onSuccess={onSuccess} />
            <FAQ />
            <Footer onGetStarted={onGetStarted} showCTA={false} />
        </div>
    );
}

export default PricingPage;
