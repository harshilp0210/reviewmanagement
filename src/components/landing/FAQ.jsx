import { useState } from 'react';
import { faqItems } from '../../data/mockData';
import './FAQ.css';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="faq-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">❓ FAQ</span>
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Got questions? We've got answers. If you can't find what you're looking for,
                        reach out to our support team.
                    </p>
                </div>

                <div className="faq-container">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item glass-card ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleItem(index)}
                            >
                                <span>{item.question}</span>
                                <span className="faq-icon">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>Still have questions?</p>
                    <button className="btn btn-secondary">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
