import { useScrollAnimation } from '../../hooks/useAnimations.jsx';
import './Blog.css';

const blogPosts = [
    {
        id: 1,
        category: 'Strategy',
        title: '10 Proven Ways to Get More Google Reviews in 2024',
        excerpt: 'Discover actionable strategies that top businesses use to consistently generate positive reviews on Google.',
        date: 'Jan 10, 2024',
        readTime: '5 min read',
        image: '📈'
    },
    {
        id: 2,
        category: 'Best Practices',
        title: 'How to Respond to Negative Reviews (Without Making It Worse)',
        excerpt: 'Learn the art of turning unhappy customers into loyal advocates with thoughtful, professional responses.',
        date: 'Jan 8, 2024',
        readTime: '7 min read',
        image: '💬'
    },
    {
        id: 3,
        category: 'Industry Insights',
        title: 'The Psychology Behind Why Customers Leave Reviews',
        excerpt: 'Understanding what motivates customers to share their experiences can help you get more authentic feedback.',
        date: 'Jan 5, 2024',
        readTime: '6 min read',
        image: '🧠'
    },
    {
        id: 4,
        category: 'Guides',
        title: 'Complete Guide to Review Widgets for Your Website',
        excerpt: 'Showcase your best reviews and build instant trust with visitors. Learn how to implement review widgets.',
        date: 'Jan 3, 2024',
        readTime: '8 min read',
        image: '⭐'
    },
    {
        id: 5,
        category: 'Tips',
        title: '5 Email Templates That Actually Get Review Responses',
        excerpt: 'Stop sending review requests that get ignored. These templates have a 40% higher response rate.',
        date: 'Dec 28, 2023',
        readTime: '4 min read',
        image: '📧'
    },
    {
        id: 6,
        category: 'Research',
        title: '2024 State of Online Reviews: What the Data Says',
        excerpt: 'We analyzed 1 million reviews to uncover trends every business owner needs to know.',
        date: 'Dec 20, 2023',
        readTime: '10 min read',
        image: '📊'
    }
];

function Blog() {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section id="blog" className="blog-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">📚 Resources</span>
                    <h2>Reputation Management Tips & Insights</h2>
                    <p>Learn best practices, strategies, and industry insights to grow your online reputation.</p>
                </div>

                <div
                    ref={ref}
                    className={`blog-grid ${isVisible ? 'animate-visible' : ''}`}
                >
                    {blogPosts.map((post, index) => (
                        <article
                            key={post.id}
                            className="blog-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="blog-image">
                                <span>{post.image}</span>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span className="blog-date">{post.date}</span>
                                </div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-footer">
                                    <span className="blog-read-time">📖 {post.readTime}</span>
                                    <a href="#" className="blog-link">
                                        Read More <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="blog-cta">
                    <a href="#" className="btn btn-secondary">
                        View All Articles
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Blog;
