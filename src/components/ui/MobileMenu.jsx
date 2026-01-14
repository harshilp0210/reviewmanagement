import { useState, useEffect, useRef } from 'react';
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
                    <a href="#features" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">✨</span>
                        Features
                    </a>
                    <a href="#demo" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">🎯</span>
                        Demo
                    </a>
                    <a href="#pricing" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">💰</span>
                        Pricing
                    </a>
                    <a href="#testimonials" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">⭐</span>
                        Testimonials
                    </a>
                    <a href="#faq" className="mobile-menu-link" onClick={onClose}>
                        <span className="mobile-menu-icon">❓</span>
                        FAQ
                    </a>
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
