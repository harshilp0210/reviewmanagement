import Benefits from '../components/landing/Benefits';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function BenefitsPage({ onGetStarted }) {
    return (
        <div className="page-container">
            <Benefits />
            <Footer onGetStarted={onGetStarted} showCTA={true} />
        </div>
    );
}

export default BenefitsPage;
