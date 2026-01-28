import Pricing from '../components/landing/Pricing';

import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function PricingPage({ onSuccess, onGetStarted }) {
    return (
        <div className="page-container">
            <Pricing />

            <FAQ />
            <Footer onGetStarted={onGetStarted} showCTA={false} />
        </div>
    );
}

export default PricingPage;
