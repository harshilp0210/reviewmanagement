import { useState } from 'react';
import './ReviewsInbox.css';

const allReviews = [
    { id: 1, platform: 'google', author: 'Sarah J.', rating: 5, text: 'Absolutely wonderful experience!', time: '2h ago', replied: false, sentiment: 'positive' },
    { id: 2, platform: 'yelp', author: 'Mike C.', rating: 4, text: 'Great location and friendly service.', time: '5h ago', replied: true, sentiment: 'positive' },
    { id: 3, platform: 'facebook', author: 'Emily D.', rating: 5, text: 'Best hotel in the area!', time: '1d ago', replied: true, sentiment: 'positive' },
    { id: 4, platform: 'google', author: 'Robert W.', rating: 2, text: 'AC wasn\'t working properly.', time: '1d ago', replied: false, sentiment: 'negative' },
    { id: 5, platform: 'google', author: 'Lisa M.', rating: 5, text: 'Perfect for our anniversary!', time: '2d ago', replied: true, sentiment: 'positive' },
    { id: 6, platform: 'yelp', author: 'Tom H.', rating: 3, text: 'Decent stay, nothing special.', time: '2d ago', replied: false, sentiment: 'neutral' },
    { id: 7, platform: 'google', author: 'Anna K.', rating: 1, text: 'Terrible service, very rude staff.', time: '3d ago', replied: false, sentiment: 'negative' },
    { id: 8, platform: 'facebook', author: 'James B.', rating: 5, text: 'Will definitely come back!', time: '3d ago', replied: true, sentiment: 'positive' },
];

const aiReplies = {
    positive: "Thank you so much for your wonderful review! We're thrilled that you had a great experience with us. Your kind words mean a lot to our team. We look forward to welcoming you back soon!",
    negative: "We sincerely apologize for the inconvenience you experienced. This is not the standard we strive for. We've addressed this issue with our team and would love the opportunity to make it right. Please reach out to us directly so we can discuss how to improve your next visit.",
    neutral: "Thank you for taking the time to share your feedback. We appreciate your honest review and are always looking for ways to improve. We hope to exceed your expectations on your next visit!"
};

function ReviewsInbox() {
    const [selectedReview, setSelectedReview] = useState(null);
    const [filter, setFilter] = useState({ platform: 'all', rating: 'all', status: 'all' });
    const [replyText, setReplyText] = useState('');

    const filteredReviews = allReviews.filter(review => {
        if (filter.platform !== 'all' && review.platform !== filter.platform) return false;
        if (filter.rating !== 'all' && review.rating !== parseInt(filter.rating)) return false;
        if (filter.status === 'pending' && review.replied) return false;
        if (filter.status === 'replied' && !review.replied) return false;
        return true;
    });

    const handleAIReply = () => {
        if (selectedReview) {
            setReplyText(aiReplies[selectedReview.sentiment]);
        }
    };

    return (
        <div className="inbox-page">
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h1>📥 Reviews Inbox</h1>
                    <p>Manage and respond to all your reviews in one place</p>
                </div>
            </div>

            {/* Filters */}
            <div className="inbox-filters">
                <select value={filter.platform} onChange={e => setFilter({ ...filter, platform: e.target.value })}>
                    <option value="all">All Platforms</option>
                    <option value="google">Google</option>
                    <option value="yelp">Yelp</option>
                    <option value="facebook">Facebook</option>
                </select>
                <select value={filter.rating} onChange={e => setFilter({ ...filter, rating: e.target.value })}>
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                </select>
                <select value={filter.status} onChange={e => setFilter({ ...filter, status: e.target.value })}>
                    <option value="all">All Status</option>
                    <option value="pending">Pending Reply</option>
                    <option value="replied">Replied</option>
                </select>
                <span className="filter-count">{filteredReviews.length} reviews</span>
            </div>

            <div className="inbox-layout">
                {/* Reviews List */}
                <div className="inbox-list">
                    {filteredReviews.map(review => (
                        <div
                            key={review.id}
                            className={`inbox-item ${selectedReview?.id === review.id ? 'selected' : ''} ${!review.replied ? 'unread' : ''}`}
                            onClick={() => {
                                setSelectedReview(review);
                                setReplyText('');
                            }}
                        >
                            <div className={`inbox-platform ${review.platform}`}>
                                {review.platform === 'google' ? 'G' : review.platform === 'yelp' ? 'Y' : 'f'}
                            </div>
                            <div className="inbox-content">
                                <div className="inbox-header">
                                    <span className="inbox-author">{review.author}</span>
                                    <span className="inbox-rating">{'★'.repeat(review.rating)}</span>
                                </div>
                                <p className="inbox-preview">{review.text}</p>
                                <div className="inbox-meta">
                                    <span className="inbox-time">{review.time}</span>
                                    {review.replied && <span className="inbox-replied">✓ Replied</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Review Detail */}
                <div className="inbox-detail">
                    {selectedReview ? (
                        <>
                            <div className="detail-header">
                                <div className={`detail-platform ${selectedReview.platform}`}>
                                    {selectedReview.platform === 'google' ? 'G' : selectedReview.platform === 'yelp' ? 'Y' : 'f'}
                                </div>
                                <div>
                                    <h3>{selectedReview.author}</h3>
                                    <div className="detail-rating">
                                        {'★'.repeat(selectedReview.rating)}{'☆'.repeat(5 - selectedReview.rating)}
                                        <span className={`sentiment-badge ${selectedReview.sentiment}`}>
                                            {selectedReview.sentiment}
                                        </span>
                                    </div>
                                </div>
                                <span className="detail-time">{selectedReview.time}</span>
                            </div>

                            <div className="detail-body">
                                <p className="detail-text">{selectedReview.text}</p>
                            </div>

                            <div className="reply-section">
                                <div className="reply-header">
                                    <h4>Your Reply</h4>
                                    <button className="btn btn-secondary btn-sm" onClick={handleAIReply}>
                                        ✨ Generate AI Reply
                                    </button>
                                </div>
                                <textarea
                                    value={replyText}
                                    onChange={e => setReplyText(e.target.value)}
                                    placeholder="Write your reply..."
                                    rows={5}
                                />
                                <div className="reply-actions">
                                    <button className="btn btn-primary" disabled={!replyText}>
                                        Send Reply
                                    </button>
                                    <button className="btn btn-ghost">Save Draft</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="no-selection">
                            <span>📬</span>
                            <p>Select a review to view details and reply</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ReviewsInbox;
