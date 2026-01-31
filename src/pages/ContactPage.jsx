import ContactForm from '../components/landing/ContactForm';
import Footer from '../components/landing/Footer';
import MetaTags from '../components/SEO/MetaTags';
import './PageStyles.css';

function ContactPage({ onSuccess, onGetStarted }) {
    return (
        <div className="page-container">
            <MetaTags
                title="Contact Us | ReviewManager - Get in Touch"
                description="Have questions about ReviewManager? Contact our team for support, sales inquiries, or partnership opportunities. We're here to help you succeed with review management."
                keywords="contact ReviewManager, review management support, customer service, get in touch"
                canonical="https://reviewmanagment.app/contact"
            />
            <div style={{ paddingTop: '80px' }}>
                <ContactForm onSuccess={onSuccess} />
            </div>
            <Footer onGetStarted={onGetStarted} showCTA={false} />
        </div>
    );
}

export default ContactPage;
