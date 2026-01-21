import { useState, useEffect } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { analyticsService } from '../../services/AnalyticsService';
import './Analytics.css';

function Analytics() {
    const [loading, setLoading] = useState(true);
    const [overview, setOverview] = useState(null);
    const [charts, setCharts] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const stats = await analyticsService.getOverviewStats();
                const chartData = await analyticsService.getDashboardData();
                setOverview(stats);
                setCharts(chartData);
            } catch (err) {
                console.error("Failed to load analytics", err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) return <div className="p-8 text-center text-white">Loading Analytics...</div>;

    return (
        <div className="analytics-page">
            <div className="page-header">
                <h2>Analytics & Insights</h2>
                <div className="date-range-picker">
                    <span>All Time</span>
                    <button className="btn-icon">📅</button>
                </div>
            </div>

            {/* Overview Cards */}
            <div className="stats-grid">
                {/* Manually recreating the mock structure with real data */}
                <div className="stat-card glass-card">
                    <div className="stat-header"><span className="stat-title">Total Reviews</span></div>
                    <div className="stat-value">{overview?.totalReviews || 0}</div>
                </div>
                <div className="stat-card glass-card">
                    <div className="stat-header"><span className="stat-title">Avg Rating</span></div>
                    <div className="stat-value">{overview?.avgRating || 0} ⭐</div>
                </div>
                <div className="stat-card glass-card">
                    <div className="stat-header"><span className="stat-title">Response Rate</span></div>
                    <div className="stat-value">100%</div>
                </div>
            </div>

            <div className="charts-grid">
                {/* Review Trends */}
                <div className="chart-card glass-card full-width">
                    <h3>Review Growth Trends</h3>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={charts?.trends || []}>
                                <defs>
                                    <linearGradient id="colorGoogle" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4285F4" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#4285F4" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="date" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" allowDecimals={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="google" stroke="#4285F4" fillOpacity={1} fill="url(#colorGoogle)" />
                                <Area type="monotone" dataKey="yelp" stroke="#FF1A1A" fillOpacity={1} fill="#FF1A1A" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sentiment Distribution */}
                <div className="chart-card glass-card">
                    <h3>Sentiment Analysis</h3>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={charts?.sentiment || []}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {(charts?.sentiment || []).map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Platform Distribution */}
                <div className="chart-card glass-card">
                    <h3>Reviews by Platform</h3>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={charts?.reviewsByPlatform || []}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="name" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" allowDecimals={false} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                                />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                    {(charts?.reviewsByPlatform || []).map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
