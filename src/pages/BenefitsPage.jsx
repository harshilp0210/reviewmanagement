import Benefits from '../components/landing/Benefits';
import Footer from '../components/landing/Footer';
import MetaTags from '../components/SEO/MetaTags';
import './PageStyles.css';

function BenefitsPage({ onGetStarted }) {
    return (
        <div className="page-container">
            <MetaTags
                title="Benefits | ReviewManager - Grow Your Business with Reviews"
                description="Discover how ReviewManager helps businesses increase revenue, build trust, and improve customer satisfaction. Learn about the proven benefits of effective review management."
                keywords="review management benefits, online reputation benefits, customer review advantages, business growth reviews"
                canonical="https://reviewmanagment.app/benefits"
            />
            <Benefits />
            <Footer onGetStarted={onGetStarted} showCTA={true} />
        </div>
    );
}

export default BenefitsPage;
