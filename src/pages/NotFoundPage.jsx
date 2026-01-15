import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <div className="not-found-content">
                <span className="not-found-code">404</span>
                <h1>Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
                <div className="not-found-actions">
                    <Link to="/" className="btn btn-primary">
                        Go Home
                    </Link>
                    <Link to="/pricing" className="btn btn-secondary">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
