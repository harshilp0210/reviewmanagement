import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { analyticsData } from '../../data/mockAnalytics';
import './Analytics.css';

function Analytics() {
    return (
        <div className="analytics-page">
            <div className="page-header">
                <h2>Analytics & Insights</h2>
                <div className="date-range-picker">
                    <span>Last 30 Days</span>
                    <button className="btn-icon">📅</button>
                </div>
            </div>

            {/* Overview Cards */}
            <div className="stats-grid">
                {analyticsData.overview.map((stat, index) => (
                    <div key={index} className="stat-card glass-card">
                        <div className="stat-header">
                            <span className="stat-title">{stat.name}</span>
                            <span className={`stat-change ${stat.type}`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="stat-value">{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="charts-grid">
                {/* Review Trends */}
                <div className="chart-card glass-card full-width">
                    <h3>Review Growth Trends</h3>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={analyticsData.trends}>
                                <defs>
                                    <linearGradient id="colorGoogle" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4285F4" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#4285F4" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorYelp" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#FF1A1A" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#FF1A1A" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="date" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="google" stroke="#4285F4" fillOpacity={1} fill="url(#colorGoogle)" />
                                <Area type="monotone" dataKey="yelp" stroke="#FF1A1A" fillOpacity={1} fill="url(#colorYelp)" />
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
                                    data={analyticsData.sentiment}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {analyticsData.sentiment.map((entry, index) => (
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
                            <BarChart data={analyticsData.reviewsByPlatform}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="name" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                                />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                    {analyticsData.reviewsByPlatform.map((entry, index) => (
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
