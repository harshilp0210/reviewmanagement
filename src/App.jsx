import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './index.css';

// Context
import { AuthProvider, useAuth } from './context/AuthContext';

// Landing Pages
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import IntegrationsPage from './pages/IntegrationsPage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';
import BenefitsPage from './pages/BenefitsPage';
import NotFoundPage from './pages/NotFoundPage';

// Dashboard
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import ReviewsInbox from './pages/dashboard/ReviewsInbox';
import ReviewRequests from './pages/dashboard/ReviewRequests';
import Widgets from './pages/dashboard/Widgets';
import Analytics from './pages/dashboard/Analytics';
import Settings from './pages/dashboard/Settings';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Components
import OnboardingModal from './components/features/OnboardingModal';
import MobileMenu from './components/ui/MobileMenu';
import LoginModal from './components/auth/LoginModal';
import ChatWidget from './components/shared/ChatWidget';
import { ToastProvider, useToast } from './components/ui/Toast';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Navigation Component
function Navigation({ onMenuOpen, onGetStarted, onSignIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  // All hooks must be called before any conditional returns
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide landing nav on dashboard pages
  if (location.pathname.startsWith('/dashboard')) {
    return null;
  }

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container flex-between">
        <Link to="/" className="nav-brand">
          <img src="/logo.png" alt="ReviewManager" className="brand-logo" />
          <span className="brand-tagline">Collect. Respond. Improve.</span>
        </Link>
        <div className="nav-links">
          <Link to="/why-reviewmanager" className={isActive('/why-reviewmanager')}>Why Us</Link>
          <Link to="/features" className={isActive('/features')}>Features</Link>
          <Link to="/pricing" className={isActive('/pricing')}>Pricing</Link>
          <Link to="/case-studies" className={isActive('/case-studies')}>Case Studies</Link>
          <Link to="/blog" className={isActive('/blog')}>Blog</Link>
        </div>
        <div className="nav-actions">
          {isAuthenticated ? (
            <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
              Dashboard
            </button>
          ) : (
            <>
              <button className="btn btn-ghost" onClick={onSignIn}>Sign In</button>
              <button className="btn btn-primary" onClick={onGetStarted}>
                Get Started
              </button>
            </>
          )}
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

// Back to Top Button
function BackToTop() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // All hooks must be called before any conditional returns
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide on dashboard
  if (location.pathname.startsWith('/dashboard')) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function AppContent() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const toast = useToast();

  const handleContactSuccess = () => {
    toast.success('Message sent successfully! We\'ll get back to you soon.');
  };

  const handleGetStarted = () => setShowOnboarding(true);
  const handleSignIn = () => setShowLoginModal(true);

  return (
    <div className="app">
      <ScrollToTop />

      <Navigation
        onMenuOpen={() => setShowMobileMenu(true)}
        onGetStarted={handleGetStarted}
        onSignIn={handleSignIn}
      />

      <main>
        <Routes>
          {/* Landing Pages */}
          <Route path="/" element={<HomePage onGetStarted={handleGetStarted} />} />
          <Route path="/why-reviewmanager" element={<BenefitsPage onGetStarted={handleGetStarted} />} />
          <Route path="/features" element={<FeaturesPage onGetStarted={handleGetStarted} />} />
          <Route path="/how-it-works" element={<HowItWorksPage onGetStarted={handleGetStarted} />} />
          <Route path="/case-studies" element={<CaseStudiesPage onGetStarted={handleGetStarted} />} />
          <Route path="/integrations" element={<IntegrationsPage onGetStarted={handleGetStarted} />} />
          <Route path="/blog" element={<BlogPage onGetStarted={handleGetStarted} />} />
          <Route path="/pricing" element={<PricingPage onSuccess={handleContactSuccess} onGetStarted={handleGetStarted} />} />

          {/* Dashboard (Protected) */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardHome />} />
            <Route path="inbox" element={<ReviewsInbox />} />
            <Route path="requests" element={<ReviewRequests />} />
            <Route path="widgets" element={<Widgets />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />

      {/* Modals */}
      {showOnboarding && (
        <OnboardingModal onClose={() => setShowOnboarding(false)} />
      )}

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      {/* AI Chatbot */}
      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <Router>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </Router>
    </ToastProvider>
  );
}

export default App;
