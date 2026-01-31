import Pricing from '../components/landing/Pricing';

import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';
import MetaTags from '../components/SEO/MetaTags';
import './PageStyles.css';

function PricingPage({ onSuccess, onGetStarted }) {
    return (
        <div className="page-container">
            <MetaTags
                title="Pricing | ReviewManager - Simple & Transparent Plans"
                description="Discover ReviewManager's flexible pricing plans for businesses of all sizes. Start free and scale as you grow. No hidden fees, cancel anytime. Get started with our review management platform today."
                keywords="review management pricing, review platform cost, business review tools pricing, affordable review management"
                canonical="https://reviewmanagment.app/pricing"
            />
            <Pricing />

            <FAQ />
            <Footer onGetStarted={onGetStarted} showCTA={false} />
        </div>
    );
}

export default PricingPage;
