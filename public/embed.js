(function () {
    const SUPABASE_URL = 'https://oyrzuculzcvqlhwdxxtf.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95cnp1Y3VsemN2cWxod2R4eHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMTk4ODksImV4cCI6MjA4NDU5NTg4OX0.EEkZqu9MtxG0RFvpocmGDMXxkB9QQcfl1HyqlHZ_lnY';

    function init() {
        const container = document.getElementById('reviewmanager-widget');
        if (!container) return;

        const limit = container.getAttribute('data-limit') || 5;
        const theme = container.getAttribute('data-theme') || 'light';
        // In a real multi-tenant app, we would filter by data-org-id here. 
        // For MVP (single org/demo), we just fetch all posted 5-star reviews.

        fetchReviews(limit).then(reviews => {
            renderWidget(container, reviews, theme);
        });
    }

    async function fetchReviews(limit) {
        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/reviews?select=*&status=eq.posted&rating=gte.4&order=created_at.desc&limit=${limit}`, {
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`
                }
            });
            if (!response.ok) throw new Error('Failed to fetch');
            return await response.json();
        } catch (e) {
            console.error('ReviewManager Widget Error:', e);
            return [];
        }
    }

    function renderWidget(container, reviews, theme) {
        if (reviews.length === 0) return;

        const shadow = container.attachShadow({ mode: 'open' });

        const bgColor = theme === 'dark' ? '#1e293b' : '#ffffff';
        const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
        const cardBg = theme === 'dark' ? '#334155' : '#f1f5f9';

        const style = `
            <style>
                :host {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                }
                .widget-container {
                    padding: 20px;
                    background: ${bgColor};
                    color: ${textColor};
                    border-radius: 12px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    max-width: 100%;
                    overflow: hidden;
                }
                .widget-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 16px;
                }
                .widget-title {
                    font-size: 1.1em;
                    font-weight: 700;
                }
                .reviews-track {
                    display: flex;
                    gap: 16px;
                    overflow-x: auto;
                    padding-bottom: 12px;
                    scrollbar-width: thin;
                }
                .review-card {
                    min-width: 280px;
                    max-width: 320px;
                    background: ${cardBg};
                    padding: 16px;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .author {
                    font-weight: 600;
                    font-size: 0.9em;
                }
                .rating {
                    color: #f59e0b;
                    letter-spacing: 2px;
                }
                .content {
                    font-size: 0.85em;
                    line-height: 1.4;
                    opacity: 0.9;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .footer {
                    font-size: 0.75em;
                    opacity: 0.6;
                    margin-top: auto;
                    display: flex;
                    justify-content: space-between;
                }
                .badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 0.7em;
                    opacity: 0.5;
                }
            </style>
        `;

        const reviewsHtml = reviews.map(r => `
            <div class="review-card">
                <div class="rating">${'★'.repeat(r.rating)}</div>
                <div class="content">"${r.content}"</div>
                <div class="author">- ${r.author_name}</div>
                <div class="footer">
                    <span>${new Date(r.created_at).toLocaleDateString()}</span>
                    <span>${r.platform.charAt(0).toUpperCase() + r.platform.slice(1)}</span>
                </div>
            </div>
        `).join('');

        shadow.innerHTML = `
            ${style}
            <div class="widget-container">
                <div class="widget-header">
                    <span class="widget-title">Top Reviews</span>
                    <div class="badge">
                        <span>Powered by ReviewManager</span>
                    </div>
                </div>
                <div class="reviews-track">
                    ${reviewsHtml}
                </div>
            </div>
        `;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
