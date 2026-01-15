import Blog from '../components/landing/Blog';
import Footer from '../components/landing/Footer';
import './PageStyles.css';

function BlogPage({ onGetStarted }) {
    return (
        <div className="page-container">
            <Blog />
            <Footer onGetStarted={onGetStarted} showCTA={true} />
        </div>
    );
}

export default BlogPage;
