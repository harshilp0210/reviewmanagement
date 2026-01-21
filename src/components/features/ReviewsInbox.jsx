import { useState, useEffect } from 'react';
import { reviewService } from '../../services/ReviewService';
import { formatDate, getPlatformName, truncateText } from '../../utils/helpers';
import './ReviewsInbox.css';

function ReviewsInbox() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        platform: '',
        rating: '',
        status: '',
        keyword: ''
    });
    const [selectedReview, setSelectedReview] = useState(null);

    // Fetch Reviews from Database
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const data = await reviewService.getReviews();
                setReviews(data || []);
            } catch (err) {
                console.error("Failed to fetch reviews:", err);
                setError("Failed to load reviews. Please check your connection.");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const filteredReviews = reviews.filter(review => {
        if (filters.platform && review.platform !== filters.platform) return false;
        if (filters.rating && review.rating !== parseInt(filters.rating)) return false;
        if (filters.status && review.status !== filters.status) return false;
        // Check both 'content' (DB) and 'text' (legacy) for search
        const content = review.content || review.text || '';
        if (filters.keyword && !content.toLowerCase().includes(filters.keyword.toLowerCase())) return false;
        return true;
    });

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < rating ? '' : 'empty'}`}>★</span>
        ));
    };

    const getStatusBadge = (status) => {
        const labels = {
            'new': 'New',
            'details_needed': 'In Progress',
            'drafted': 'Drafted',
            'pending_approval': 'Pending',
            'replied': 'Replied',
            'posted': 'Posted',
            'resolved': 'Resolved'
        };
        // Normalize status to lowercase for class matching
        const statusClass = (status || 'new').toLowerCase().replace('_', '-');
        return <span className={`status-badge status-${statusClass}`}>{labels[status] || status}</span>;
    };

    if (loading) {
        return (
            <div className="inbox-loading">
                <div className="spinner"></div>
                <p>Connecting to secure database...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="inbox-error">
                <p>⚠️ {error}</p>
                <button className="btn btn-secondary" onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    return (
        <div className="inbox-container">
            {/* Filters */}
            <div className="inbox-filters">
                <div className="filter-group">
                    <select
                        className="input select filter-select"
                        value={filters.platform}
                        onChange={(e) => setFilters({ ...filters, platform: e.target.value })}
                    >
                        <option value="">All Platforms</option>
                        <option value="google">Google</option>
                        <option value="yelp">Yelp</option>
                        <option value="facebook">Facebook</option>
                        <option value="tripadvisor">TripAdvisor</option>
                    </select>

                    <select
                        className="input select filter-select"
                        value={filters.rating}
                        onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                    >
                        <option value="">All Ratings</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>

                    <select
                        className="input select filter-select"
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    >
                        <option value="">All Status</option>
                        <option value="new">New</option>
                        <option value="drafted">Drafted</option>
                        <option value="pending_approval">Pending Approval</option>
                        <option value="posted">Posted</option>
                    </select>
                </div>

                <div className="search-box">
                    <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                        type="text"
                        className="input search-input"
                        placeholder="Search reviews..."
                        value={filters.keyword}
                        onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                    />
                </div>
            </div>

            {/* Reviews List */}
            <div className="reviews-list">
                {reviews.length === 0 && (
                    <div className="empty-db-state">
                        <p>No reviews found in database.</p>
                        <p className="sub-text">You are connected to Supabase, but the table is empty.</p>
                    </div>
                )}

                {filteredReviews.map(review => (
                    <div
                        key={review.id}
                        className={`review-card glass-card ${selectedReview?.id === review.id ? 'selected' : ''}`}
                        onClick={() => setSelectedReview(review)}
                    >
                        <div className="review-header">
                            <span className={`platform-badge badge-${review.platform.toLowerCase()}`}>
                                {getPlatformName(review.platform)}
                            </span>
                            {getStatusBadge(review.status)}
                            <span className="review-date">{formatDate(review.created_at)}</span>
                        </div>

                        <div className="review-body">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    {(review.author_name || 'A').charAt(0)}
                                </div>
                                <div className="reviewer-details">
                                    <span className="reviewer-name">{review.author_name || 'Anonymous'}</span>
                                    <div className="review-rating">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                            </div>

                            <p className="review-text">{truncateText(review.content || '', 120)}</p>

                            <div className="review-meta">
                                {/* Fallback location ID if address is missing */}
                                <span className="review-location">📍 {review.location_id?.substring(0, 8) || 'Main Location'}</span>
                            </div>
                        </div>

                        <div className="review-actions">
                            <button className="btn btn-primary btn-sm">
                                ✨ AI Reply
                            </button>
                            <button className="btn btn-secondary btn-sm">
                                Reply
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredReviews.length === 0 && reviews.length > 0 && (
                <div className="no-results">
                    <span className="no-results-icon">🔍</span>
                    <p>No reviews match your filters</p>
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setFilters({ platform: '', rating: '', status: '', keyword: '' })}
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
}

export default ReviewsInbox;
