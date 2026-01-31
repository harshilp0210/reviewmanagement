import Hero from '../components/landing/Hero';
import CustomerLogos from '../components/landing/CustomerLogos';
import StatsBar from '../components/landing/StatsBar';
import DemoSection from '../components/landing/DemoSection';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';
import MetaTags from '../components/SEO/MetaTags';

function HomePage({ onGetStarted }) {
    return (
        <>
            <MetaTags
                title="ReviewManager | Collect. Respond. Improve."
                description="ReviewManager helps businesses collect, manage, and respond to customer reviews across all platforms. Boost your online reputation with AI-powered review management, automated review requests, and detailed analytics."
                keywords="review management, customer reviews, online reputation, review collection, review response, AI review assistant, Google reviews, Yelp reviews"
                canonical="https://reviewmanagment.app/"
            />
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
