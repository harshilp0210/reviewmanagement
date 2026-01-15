import Hero from '../components/landing/Hero';
import CustomerLogos from '../components/landing/CustomerLogos';
import StatsBar from '../components/landing/StatsBar';
import DemoSection from '../components/landing/DemoSection';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

function HomePage({ onGetStarted }) {
    return (
        <>
            <Hero onGetStarted={onGetStarted} />
            <CustomerLogos />
            <StatsBar />
            <DemoSection />
            <Testimonials />
            <Footer onGetStarted={onGetStarted} />
        </>
    );
}

export default HomePage;
