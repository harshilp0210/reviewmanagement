import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

function MobileMenu({ isOpen, onClose }) {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <>
            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} />
            <div ref={menuRef} className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <img src="/logo.png" alt="ReviewManager" className="mobile-menu-logo" />
                    <button className="mobile-menu-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <nav className="mobile-menu-nav">
                    <Link to="/why-reviewmanager" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">💡</span>
                        Why Us
                    </Link>
                    <Link to="/features" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">✨</span>
                        Features
                    </Link>
                    <Link to="/pricing" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">💰</span>
                        Pricing
                    </Link>
                    <Link to="/case-studies" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">📈</span>
                        Case Studies
                    </Link>
                    <Link to="/blog" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">📚</span>
                        Blog
                    </Link>
                    <Link to="/integrations" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">🔗</span>
                        Integrations
                    </Link>
                    <Link to="/contact" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">✉️</span>
                        Contact Us
                    </Link>
                </nav>

                <div className="mobile-menu-actions">
                    <button className="btn btn-secondary">Sign In</button>
                    <button className="btn btn-primary">Get Started Free</button>
                </div>

                <div className="mobile-menu-footer">
                    <p>Collect. Respond. Improve.</p>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
