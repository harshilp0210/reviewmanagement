import Features from '../components/landing/Features';
import Footer from '../components/landing/Footer';
import MetaTags from '../components/SEO/MetaTags';
import './PageStyles.css';

function FeaturesPage({ onGetStarted }) {
    return (
        <div className="page-container">
            <MetaTags
                title="Features | ReviewManager - AI-Powered Review Management"
                description="Explore ReviewManager's powerful features: automated review collection, AI-powered responses, multi-platform management, detailed analytics, and more. Streamline your online reputation management."
                keywords="review management features, automated reviews, AI review response, review analytics, multi-platform reviews, reputation management tools"
                canonical="https://reviewmanagment.app/features"
            />
            <Features />
            <Footer onGetStarted={onGetStarted} showCTA={true} />
        </div>
    );
}

export default FeaturesPage;
