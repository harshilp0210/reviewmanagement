import HowItWorks from '../components/landing/HowItWorks';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function HowItWorksPage({ onGetStarted }) {
    return (
        <div className="page-container">
            <HowItWorks />
            <Footer onGetStarted={onGetStarted} showCTA={true} />
        </div>
    );
}

export default HowItWorksPage;
