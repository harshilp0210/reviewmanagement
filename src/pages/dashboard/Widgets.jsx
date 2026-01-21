import { useState, useEffect, useRef } from 'react';
import './Widgets.css';

function Widgets() {
    const [theme, setTheme] = useState('light');
    const [previewKey, setPreviewKey] = useState(0);
    const scriptRef = useRef(null);

    // Reload the widget script when settings change to show real preview
    useEffect(() => {
        // Cleanup old widget content
        const container = document.getElementById('reviewmanager-widget');
        if (container) {
            if (container.shadowRoot) {
                container.shadowRoot.innerHTML = ''; // Basic cleanup, though Shadow DOM persists
            }
            // For a cleaner reset in React, we might just unmount/remount the div
        }

        // Re-inject script
        if (scriptRef.current) {
            document.body.removeChild(scriptRef.current);
        }

        const script = document.createElement('script');
        script.src = '/embed.js';
        script.async = true;
        document.body.appendChild(script);
        scriptRef.current = script;

        return () => {
            if (scriptRef.current) {
                document.body.removeChild(scriptRef.current);
            }
        };
    }, [theme, previewKey]);

    const codeSnippet = `
<!-- ReviewManager Widget -->
<div id="reviewmanager-widget" data-theme="${theme}" data-limit="5"></div>
<script src="http://localhost:5173/embed.js" async></script>
    `.trim();

    return (
        <div className="widgets-page">
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h1>📢 Showcase Widgets</h1>
                    <p>Embed your best reviews on your website</p>
                </div>
            </div>

            <div className="widgets-grid">
                {/* Configuration */}
                <div className="config-card glass-card">
                    <h3>Customize Widget</h3>
                    <div className="form-group">
                        <label>Theme</label>
                        <select value={theme} onChange={(e) => {
                            setTheme(e.target.value);
                            setPreviewKey(k => k + 1); // Force re-render attempt
                        }}>
                            <option value="light">Light Mode</option>
                            <option value="dark">Dark Mode</option>
                        </select>
                    </div>
                </div>

                {/* Installation */}
                <div className="install-card glass-card">
                    <h3>Installation Code</h3>
                    <p>Copy and paste this into your website's HTML:</p>
                    <div className="code-block">
                        <pre>{codeSnippet}</pre>
                        <button className="btn btn-secondary btn-sm copy-btn" onClick={() => navigator.clipboard.writeText(codeSnippet)}>
                            Copy
                        </button>
                    </div>
                </div>
            </div>

            {/* Live Preview */}
            <div className="preview-section">
                <h3>Live Preview</h3>
                <div className="preview-container">
                    {/* The Widget Wrapper */}
                    {/* Key forces React to destroy and recreate the div, clearing shadow root */}
                    <div
                        key={`${theme}-${previewKey}`}
                        id="reviewmanager-widget"
                        data-theme={theme}
                        data-limit="5"
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Widgets;
