import { useState } from 'react';
import { mockReviews } from '../../data/mockData';
import { formatDate, getPlatformName, truncateText } from '../../utils/helpers';
import './ReviewsInbox.css';

function ReviewsInbox() {
    const [filters, setFilters] = useState({
        platform: '',
        rating: '',
        status: '',
        keyword: ''
    });
    const [selectedReview, setSelectedReview] = useState(null);

    const filteredReviews = mockReviews.filter(review => {
        if (filters.platform && review.platform !== filters.platform) return false;
        if (filters.rating && review.rating !== parseInt(filters.rating)) return false;
        if (filters.status && review.status !== filters.status) return false;
        if (filters.keyword && !review.text.toLowerCase().includes(filters.keyword.toLowerCase())) return false;
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
            'in-progress': 'In Progress',
            'replied': 'Replied',
            'resolved': 'Resolved'
        };
        return <span className={`status-badge status-${status}`}>{labels[status]}</span>;
    };

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
                        <option value="in-progress">In Progress</option>
                        <option value="replied">Replied</option>
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
                        placeholder="Search keywords (refund, delivery, rude...)"
                        value={filters.keyword}
                        onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                    />
                </div>
            </div>

            {/* Reviews List */}
            <div className="reviews-list">
                {filteredReviews.map(review => (
                    <div
                        key={review.id}
                        className={`review-card glass-card ${selectedReview?.id === review.id ? 'selected' : ''}`}
                        onClick={() => setSelectedReview(review)}
                    >
                        <div className="review-header">
                            <span className={`platform-badge badge-${review.platform}`}>
                                {getPlatformName(review.platform)}
                            </span>
                            {getStatusBadge(review.status)}
                            <span className="review-date">{formatDate(review.date)}</span>
                        </div>

                        <div className="review-body">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    {review.customerName.charAt(0)}
                                </div>
                                <div className="reviewer-details">
                                    <span className="reviewer-name">{review.customerName}</span>
                                    <div className="review-rating">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                            </div>

                            <p className="review-text">{truncateText(review.text, 120)}</p>

                            <div className="review-meta">
                                <span className="review-location">📍 {review.location}</span>
                                <span className="review-service">{review.service}</span>
                            </div>
                        </div>

                        <div className="review-actions">
                            <button className="btn btn-primary btn-sm">
                                ✨ AI Reply
                            </button>
                            <button className="btn btn-secondary btn-sm">
                                Reply
                            </button>
                            <button className="btn btn-ghost btn-sm">
                                Assign
                            </button>
                            <button className="btn btn-ghost btn-sm">
                                Tag
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredReviews.length === 0 && (
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
