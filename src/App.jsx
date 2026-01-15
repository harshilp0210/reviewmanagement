import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';

// Pages
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import IntegrationsPage from './pages/IntegrationsPage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';

// Feature Components
import OnboardingModal from './components/features/OnboardingModal';

// UI Components
import MobileMenu from './components/ui/MobileMenu';
import { ToastProvider, useToast } from './components/ui/Toast';

// Navigation Component
function Navigation({ onMenuOpen, onGetStarted }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="nav">
      <div className="container flex-between">
        <Link to="/" className="nav-brand">
          <img src="/logo.png" alt="ReviewManager" className="brand-logo" />
          <span className="brand-tagline">Collect. Respond. Improve.</span>
        </Link>
        <div className="nav-links">
          <Link to="/features" className={isActive('/features')}>Features</Link>
          <Link to="/how-it-works" className={isActive('/how-it-works')}>How It Works</Link>
          <Link to="/case-studies" className={isActive('/case-studies')}>Case Studies</Link>
          <Link to="/pricing" className={isActive('/pricing')}>Pricing</Link>
          <Link to="/blog" className={isActive('/blog')}>Blog</Link>
        </div>
        <div className="nav-actions">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn btn-primary" onClick={onGetStarted}>
            Get Started
          </button>
          <button
            className="hamburger-btn"
            onClick={onMenuOpen}
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
  );
}

function AppContent() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toast = useToast();

  const handleContactSuccess = () => {
    toast.success('Message sent successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="app">
      <Navigation
        onMenuOpen={() => setShowMobileMenu(true)}
        onGetStarted={() => setShowOnboarding(true)}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onGetStarted={() => setShowOnboarding(true)} />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/pricing" element={<PricingPage onSuccess={handleContactSuccess} />} />
        </Routes>
      </main>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />

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
      <Router>
        <AppContent />
      </Router>
    </ToastProvider>
  );
}

export default App;
