import Features from '../components/landing/Features';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function FeaturesPage({ onGetStarted }) {
    return (
        <div className="page-container">
            <Features />
            <Footer onGetStarted={onGetStarted} showCTA={true} />
        </div>
    );
}

export default FeaturesPage;
