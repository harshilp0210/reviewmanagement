import ContactForm from '../components/landing/ContactForm';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function ContactPage({ onSuccess, onGetStarted }) {
    return (
        <div className="page-container">
            <div style={{ paddingTop: '80px' }}>
                <ContactForm onSuccess={onSuccess} />
            </div>
            <Footer onGetStarted={onGetStarted} showCTA={false} />
        </div>
    );
}

export default ContactPage;
