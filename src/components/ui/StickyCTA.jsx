import { useState, useEffect } from 'react';
import './StickyCTA.css';

function StickyCTA({ onClick }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero section (roughly 600px)
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky-cta ${isVisible ? 'visible' : ''}`}>
            <button className="sticky-cta-btn" onClick={onClick}>
                <span className="sticky-cta-text">Get Started Free</span>
                <span className="sticky-cta-icon">→</span>
            </button>
        </div>
    );
}

export default StickyCTA;
