import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState(null);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fetch blogs from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                setError(null);

                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

                const response = await fetch('https://winchelmohandes-furniture.online/api/blog', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    mode: 'cors',
                    credentials: 'omit',
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`فشل في تحميل المقالات (${response.status})`);
                }

                const data = await response.json();

                if (data.success) {
                    setBlogs(data.data || []);
                    setPagination(data.pagination || null);
                } else {
                    throw new Error('فشل في تحميل المقالات');
                }
            } catch (err) {
                if (err.name === 'AbortError') {
                    setError('انتهت مهلة الاتصال. يرجى المحاولة مرة أخرى.');
                } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
                    setError('فشل الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت أو إعدادات CORS.');
                } else {
                    setError(err.message || 'حدث خطأ غير متوقع');
                }
                console.error('Error fetching blogs:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Parse tags
    const parseTags = (tagsString) => {
        try {
            return JSON.parse(tagsString || '[]');
        } catch {
            return [];
        }
    };

    // Get full image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        if (imagePath.startsWith('http')) return imagePath;
        return `https://winchelmohandes-furniture.online/api${imagePath}`;
    };

    return (
        <div className="blogs-page">
            <div className="page-header">
                <div className="header-overlay"></div>
                <div className="container">
                    <div className="header-content">
                        <span className="header-badge">
                            <i className="fas fa-blog"></i>
                            {pagination ? `${pagination.total} مقال` : 'المدونة'}
                        </span>
                        <h1>المدونة</h1>
                        <p>مقالات ونصائح حول التشطيبات والديكور</p>
                    </div>
                </div>
            </div>

            <section className="blogs-section">
                <div className="container">
                    {loading ? (
                        <div className="loading-state">
                            <div className="loading-spinner">
                                <i className="fas fa-spinner fa-spin"></i>
                            </div>
                            <p>جاري تحميل المقالات...</p>
                        </div>
                    ) : error ? (
                        <div className="error-state">
                            <div className="error-icon">
                                <i className="fas fa-exclamation-triangle"></i>
                            </div>
                            <h3>حدث خطأ</h3>
                            <p>{error}</p>
                            <button
                                className="retry-btn"
                                onClick={() => window.location.reload()}
                            >
                                إعادة المحاولة
                            </button>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="no-blogs">
                            <div className="no-blogs-icon">
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h3>لا توجد مقالات متاحة</h3>
                            <p>لم يتم العثور على أي مقالات في الوقت الحالي</p>
                        </div>
                    ) : (
                        <>
                            {pagination && (
                                <div className="blogs-info">
                                    <div className="info-item">
                                        <i className="fas fa-file-alt"></i>
                                        <span>عرض {blogs.length} من أصل {pagination.total} مقال</span>
                                    </div>
                                </div>
                            )}

                            <div className="blogs-grid">
                                {blogs.map((blog, index) => {
                                    const tags = parseTags(blog.tags);

                                    return (
                                        <article
                                            className="blog-card"
                                            key={blog.id}
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <div className="card-image-wrapper">
                                                <img
                                                    src={getImageUrl(blog.image_path)}
                                                    alt={blog.title}
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
                                                    }}
                                                />
                                                <div className="image-overlay"></div>
                                                <div className="category-badge">
                                                    <i className="fas fa-tag"></i>
                                                    {blog.category}
                                                </div>
                                            </div>

                                            <div className="card-content">
                                                <div className="card-header">
                                                    <h3>{blog.title}</h3>
                                                    <div className="blog-meta">
                                                        <span className="meta-item">
                                                            <i className="fas fa-user"></i>
                                                            {blog.author}
                                                        </span>
                                                        <span className="meta-item">
                                                            <i className="fas fa-calendar"></i>
                                                            {formatDate(blog.published_at)}
                                                        </span>
                                                    </div>
                                                </div>

                                                <p className="card-excerpt">{blog.excerpt}</p>

                                                {tags.length > 0 && (
                                                    <div className="card-tags">
                                                        {tags.map((tag, tagIndex) => (
                                                            <span key={tagIndex} className="tag">
                                                                #{tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="card-footer">
                                                    <Link
                                                        to={`/blogs/${blog.slug}`}
                                                        className="read-more-btn"
                                                    >
                                                        اقرأ المزيد
                                                        <i className="fas fa-arrow-left"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
            </section>

            <section className="blogs-cta-section">
                <div className="container">
                    <div className="blogs-cta">
                        <h2>هل تريد معرفة المزيد؟</h2>
                        <p>تواصل معنا للحصول على استشارة مجانية حول مشروعك</p>
                        <Link to="/contact" className="btn btn-primary">تواصل معنا</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;

