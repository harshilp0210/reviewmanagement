export const analyticsData = {
    overview: [
        { name: 'Total Reviews', value: '1,284', change: '+12%', type: 'positive' },
        { name: 'Avg. Rating', value: '4.8', change: '+0.2', type: 'positive' },
        { name: 'Response Rate', value: '94%', change: '-2%', type: 'negative' },
        { name: 'Sentiment', value: '92%', change: '+5%', type: 'positive' },
    ],
    trends: [
        { date: 'Jan 1', google: 4, yelp: 2, facebook: 1 },
        { date: 'Jan 5', google: 6, yelp: 3, facebook: 2 },
        { date: 'Jan 10', google: 8, yelp: 4, facebook: 3 },
        { date: 'Jan 15', google: 12, yelp: 5, facebook: 2 },
        { date: 'Jan 20', google: 9, yelp: 6, facebook: 4 },
        { date: 'Jan 25', google: 15, yelp: 8, facebook: 5 },
        { date: 'Jan 30', google: 18, yelp: 7, facebook: 4 },
    ],
    sentiment: [
        { name: 'Positive', value: 85, color: '#4ade80' },
        { name: 'Neutral', value: 10, color: '#facc15' },
        { name: 'Negative', value: 5, color: '#f87171' },
    ],
    reviewsByPlatform: [
        { name: 'Google', value: 850, fill: '#4285F4' },
        { name: 'Yelp', value: 300, fill: '#FF1A1A' },
        { name: 'Facebook', value: 134, fill: '#1877F2' },
    ]
};
