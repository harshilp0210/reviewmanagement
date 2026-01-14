// Utility helper functions

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;

    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
};

export const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => ({
        filled: i < rating,
        key: i
    }));
};

export const getPlatformColor = (platform) => {
    const colors = {
        google: '#4285f4',
        yelp: '#ff1a1a',
        facebook: '#1877f2',
        tripadvisor: '#34e0a1'
    };
    return colors[platform] || '#667eea';
};

export const getPlatformName = (platform) => {
    const names = {
        google: 'Google',
        yelp: 'Yelp',
        facebook: 'Facebook',
        tripadvisor: 'TripAdvisor'
    };
    return names[platform] || platform;
};

export const filterReviews = (reviews, filters) => {
    return reviews.filter(review => {
        if (filters.platform && review.platform !== filters.platform) return false;
        if (filters.rating && review.rating !== filters.rating) return false;
        if (filters.status && review.status !== filters.status) return false;
        if (filters.keyword) {
            const keyword = filters.keyword.toLowerCase();
            if (!review.text.toLowerCase().includes(keyword)) return false;
        }
        return true;
    });
};

export const generateShortLink = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `rev.io/${result}`;
};

export const processTemplate = (template, data) => {
    let processed = template;
    Object.keys(data).forEach(key => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        processed = processed.replace(regex, data[key] || `[${key}]`);
    });
    return processed;
};

export const getStatusColor = (status) => {
    const colors = {
        new: 'var(--accent-primary)',
        'in-progress': 'var(--star-gold)',
        replied: 'var(--success)',
        resolved: 'var(--text-muted)'
    };
    return colors[status] || 'var(--text-muted)';
};

export const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
