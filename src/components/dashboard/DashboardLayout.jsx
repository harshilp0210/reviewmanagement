import { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './DashboardLayout.css';

const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard', exact: true },
    { path: '/dashboard/inbox', icon: '📥', label: 'Reviews Inbox' },
    { path: '/dashboard/requests', icon: '📧', label: 'Review Requests' },
    { path: '/dashboard/analytics', icon: '📈', label: 'Analytics' },
    { path: '/dashboard/settings', icon: '⚙️', label: 'Settings' }
];

function DashboardLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const { user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const isActive = (path, exact = false) => {
        if (exact) {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div className={`dashboard-layout ${sidebarCollapsed ? 'collapsed' : ''}`}>
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-logo">
                        <img src="/logo.png" alt="ReviewManager" />
                        {!sidebarCollapsed && <span>ReviewManager</span>}
                    </Link>
                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    >
                        {sidebarCollapsed ? '→' : '←'}
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`sidebar-link ${isActive(item.path, item.exact) ? 'active' : ''}`}
                        >
                            <span className="sidebar-icon">{item.icon}</span>
                            {!sidebarCollapsed && <span className="sidebar-label">{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-info">
                        <div className="user-avatar">
                            {user?.name?.charAt(0) || 'U'}
                        </div>
                        {!sidebarCollapsed && (
                            <div className="user-details">
                                <span className="user-name">{user?.name || 'User'}</span>
                                <span className="user-business">{user?.business || 'Business'}</span>
                            </div>
                        )}
                    </div>
                    <button className="logout-btn" onClick={handleLogout} title="Logout">
                        🚪
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;
