import CaseStudies from '../components/landing/CaseStudies';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function CaseStudiesPage({ onGetStarted }) {
    return (
        <div className="page-container">
            <CaseStudies />
            <Footer onGetStarted={onGetStarted} showCTA={true} />
        </div>
    );
}

export default CaseStudiesPage;
