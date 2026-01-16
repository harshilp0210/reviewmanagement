import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './LoginModal.css';

function LoginModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, isLoading } = useAuth();
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            await login(email, password);
            onClose();
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Invalid credentials');
        }
    };

    const handleDemoLogin = async () => {
        setEmail('demo@reviewmanager.com');
        setPassword('demo123');
        await login('demo@reviewmanager.com', 'demo123');
        onClose();
        navigate('/dashboard');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="login-modal glass-card" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="login-header">
                    <img src="/logo.png" alt="ReviewManager" className="login-logo" />
                    <h2>Welcome Back</h2>
                    <p>Sign in to your ReviewManager account</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    {error && <div className="login-error">{error}</div>}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#" className="forgot-link">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-full"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="login-divider">
                    <span>or</span>
                </div>

                <button
                    className="btn btn-demo btn-full"
                    onClick={handleDemoLogin}
                    disabled={isLoading}
                >
                    🎯 Try Demo Account
                </button>

                <p className="login-footer">
                    Don't have an account? <a href="#">Start free trial</a>
                </p>
            </div>
        </div>
    );
}

export default LoginModal;
