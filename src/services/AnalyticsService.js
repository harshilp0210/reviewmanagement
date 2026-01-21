import { supabase } from '../supabaseClient';

export const analyticsService = {

    // Get overview stats (Total Reviews, Avg Rating, etc.)
    async getOverviewStats() {
        // Ideally we use RPC for this, but for Phase 1 we can fetch and calculate
        const { data: reviews, error } = await supabase
            .from('reviews')
            .select('rating, sentiment, platform, created_at');

        if (error) throw error;
        if (!reviews || reviews.length === 0) return null;

        const total = reviews.length;
        const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(1);

        // Calculate simple trends (last 30 days)
        // For now we just return static growth as example, or calculate real growth if we had more history

        return {
            totalReviews: total,
            avgRating: avgRating,
            sentimentScore: '85%', // Placeholder or calc from sentiment columns
            responseRate: '100%' // Placeholder
        };
    },

    // Get data for graphs
    async getDashboardData() {
        const { data: reviews, error } = await supabase
            .from('reviews')
            .select('*')
            .order('created_at', { ascending: true });

        if (error) throw error;

        // 1. Process Platform Distribution
        const platforms = {};
        reviews.forEach(r => {
            platforms[r.platform] = (platforms[r.platform] || 0) + 1;
        });

        const platformData = Object.keys(platforms).map(key => ({
            name: key.charAt(0).toUpperCase() + key.slice(1),
            value: platforms[key],
            fill: getKeyColor(key)
        }));

        // 2. Process Sentiment
        const sentiments = { positive: 0, neutral: 0, negative: 0 };
        reviews.forEach(r => {
            if (r.sentiment) sentiments[r.sentiment]++;
        });

        const sentimentData = [
            { name: 'Positive', value: sentiments.positive, color: '#10b981' }, // Green
            { name: 'Neutral', value: sentiments.neutral, color: '#f59e0b' }, // Amber
            { name: 'Negative', value: sentiments.negative, color: '#ef4444' } // Red
        ];

        // 3. Trends (Group by Date)
        // This is a simplified transformation for the chart
        const trendsMap = {};
        reviews.forEach(r => {
            const date = new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            if (!trendsMap[date]) trendsMap[date] = { date, google: 0, yelp: 0, facebook: 0 };
            if (r.platform === 'google') trendsMap[date].google++;
            if (r.platform === 'yelp') trendsMap[date].yelp++;
            if (r.platform === 'facebook') trendsMap[date].facebook++;
        });
        const trendsData = Object.values(trendsMap);

        return {
            reviewsByPlatform: platformData,
            sentiment: sentimentData,
            trends: trendsData
        };
    }
};

// Helper for colors
function getKeyColor(platform) {
    const colors = {
        google: '#4285F4',
        yelp: '#FF1A1A',
        facebook: '#1877F2',
        instagram: '#E1306C'
    };
    return colors[platform] || '#cbd5e1';
}
