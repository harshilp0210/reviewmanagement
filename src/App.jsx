import { useState } from 'react';
import './index.css';

// Landing Components
import Hero from './components/landing/Hero';
import StatsBar from './components/landing/StatsBar';
import CustomerLogos from './components/landing/CustomerLogos';
import DemoSection from './components/landing/DemoSection';
import Testimonials from './components/landing/Testimonials';
import Pricing from './components/landing/Pricing';
import ContactForm from './components/landing/ContactForm';
import FAQ from './components/landing/FAQ';
import Footer from './components/landing/Footer';

// Feature Components
import OnboardingModal from './components/features/OnboardingModal';

// UI Components
import MobileMenu from './components/ui/MobileMenu';
import StickyCTA from './components/ui/StickyCTA';
import { ToastProvider, useToast } from './components/ui/Toast';

function AppContent() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toast = useToast();

  const handleContactSuccess = () => {
    toast.success('Message sent successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="container flex-between">
          <div className="nav-brand">
            <img src="/logo.png" alt="ReviewManager" className="brand-logo" />
            <span className="brand-tagline">Collect. Respond. Improve.</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>
          <div className="nav-actions">
            <button className="btn btn-ghost">Sign In</button>
            <button
              className="btn btn-primary"
              onClick={() => setShowOnboarding(true)}
            >
              Get Started
            </button>
            {/* Hamburger Menu Button */}
            <button
              className="hamburger-btn"
              onClick={() => setShowMobileMenu(true)}
              aria-label="Open menu"
            >
              <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero onGetStarted={() => setShowOnboarding(true)} />
        <CustomerLogos />
        <StatsBar />
        <DemoSection />
        <Testimonials />
        <Pricing />
        <ContactForm onSuccess={handleContactSuccess} />
        <FAQ />
        <Footer onGetStarted={() => setShowOnboarding(true)} />
      </main>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />

      {/* Sticky CTA (Mobile Only) */}
      <StickyCTA onClick={() => setShowOnboarding(true)} />

      {/* Modals */}
      {showOnboarding && (
        <OnboardingModal onClose={() => setShowOnboarding(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;
