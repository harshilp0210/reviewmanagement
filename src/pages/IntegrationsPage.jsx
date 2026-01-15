import Integrations from '../components/landing/Integrations';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function IntegrationsPage({ onGetStarted }) {
    return (
        <div className="page-container">
            <Integrations />
            <Footer onGetStarted={onGetStarted} showCTA={true} />
        </div>
    );
}

export default IntegrationsPage;
