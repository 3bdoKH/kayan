import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fetch blog by slug
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                setError(null);

                const fetchOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    mode: 'cors',
                    credentials: 'omit',
                };

                // First, fetch all blogs to find the one with matching slug
                const controller1 = new AbortController();
                const timeoutId1 = setTimeout(() => controller1.abort(), 10000);

                const blogsResponse = await fetch('https://winchelmohandes-furniture.online/api/blog', {
                    ...fetchOptions,
                    signal: controller1.signal
                });

                clearTimeout(timeoutId1);

                if (!blogsResponse.ok) {
                    throw new Error(`فشل في تحميل المقالات (${blogsResponse.status})`);
                }

                const blogsData = await blogsResponse.json();

                if (!blogsData.success) {
                    throw new Error('فشل في تحميل المقالات');
                }

                // Find the blog with matching slug
                const foundBlog = blogsData.data.find(b => b.slug === slug);

                if (!foundBlog) {
                    throw new Error('المقال غير موجود');
                }

                // Now fetch the full blog post by ID
                const controller2 = new AbortController();
                const timeoutId2 = setTimeout(() => controller2.abort(), 10000);

                const blogResponse = await fetch(`https://winchelmohandes-furniture.online/api/blog/${foundBlog.id}`, {
                    ...fetchOptions,
                    signal: controller2.signal
                });

                clearTimeout(timeoutId2);

                if (!blogResponse.ok) {
                    throw new Error(`فشل في تحميل المقال (${blogResponse.status})`);
                }

                const blogData = await blogResponse.json();

                if (blogData.success) {
                    setBlog(blogData.data);
                } else {
                    throw new Error('فشل في تحميل المقال');
                }
            } catch (err) {
                if (err.name === 'AbortError') {
                    setError('انتهت مهلة الاتصال. يرجى المحاولة مرة أخرى.');
                } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
                    setError('فشل الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت أو إعدادات CORS.');
                } else {
                    setError(err.message || 'حدث خطأ غير متوقع');
                }
                console.error('Error fetching blog:', err);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchBlog();
        }
    }, [slug]);

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

    // Handle 404 - blog not found
    if (!loading && error && error.includes('غير موجود')) {
        return (
            <div className="blog-not-found">
                <div className="container">
                    <div className="not-found-content">
                        <i className="fas fa-exclamation-circle"></i>
                        <h2>المقال غير موجود</h2>
                        <p>عذراً، لم نتمكن من العثور على المقال المطلوب</p>
                        <Link to="/blogs" className="btn btn-primary">العودة للمدونة</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            {loading ? (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>جاري تحميل المقال...</p>
                </div>
            ) : error ? (
                <div className="error-state">
                    <div className="error-icon">
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3>حدث خطأ</h3>
                    <p>{error}</p>
                    <div className="error-actions">
                        <button
                            className="retry-btn"
                            onClick={() => window.location.reload()}
                        >
                            إعادة المحاولة
                        </button>
                        <Link to="/blogs" className="back-btn">
                            العودة للمدونة
                        </Link>
                    </div>
                </div>
            ) : blog ? (
                <>
                    <div className="blog-header">
                        <div className="container">
                            <div className="breadcrumbs">
                                <Link to="/">الرئيسية</Link>
                                <span>/</span>
                                <Link to="/blogs">المدونة</Link>
                                <span>/</span>
                                <span className="current">{blog.title}</span>
                            </div>

                            <div className="blog-category-badge">
                                <i className="fas fa-tag"></i>
                                {blog.category}
                            </div>

                            <h1>{blog.title}</h1>

                            <div className="blog-meta">
                                <div className="meta-item">
                                    <i className="fas fa-user"></i>
                                    <span>{blog.author}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fas fa-calendar"></i>
                                    <span>{formatDate(blog.published_at)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-image-section">
                        <div className="container">
                            <div className="blog-featured-image">
                                <img
                                    src={getImageUrl(blog.image_path)}
                                    alt={blog.title}
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/1200x600?text=No+Image';
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="blog-content-section">
                        <div className="container">
                            <div className="blog-content-grid">
                                <article className="blog-main-content">
                                    <div className="content-body">
                                        <div
                                            className="blog-content"
                                            dangerouslySetInnerHTML={{
                                                __html: blog.content.replace(/<br\s*\/?>/gi, '<br />')
                                            }}
                                        />
                                    </div>

                                    {parseTags(blog.tags).length > 0 && (
                                        <div className="blog-tags">
                                            <h4>
                                                <i className="fas fa-tags"></i>
                                                الوسوم:
                                            </h4>
                                            <div className="tags-list">
                                                {parseTags(blog.tags).map((tag, index) => (
                                                    <span key={index} className="tag">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="blog-share">
                                        <h4>شارك المقال:</h4>
                                        <div className="share-buttons">
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="share-btn facebook"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                                فيسبوك
                                            </a>
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="share-btn twitter"
                                            >
                                                <i className="fab fa-twitter"></i>
                                                تويتر
                                            </a>
                                            <a
                                                href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' ' + window.location.href)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="share-btn whatsapp"
                                            >
                                                <i className="fab fa-whatsapp"></i>
                                                واتساب
                                            </a>
                                        </div>
                                    </div>
                                </article>

                                <aside className="blog-sidebar">
                                    <div className="sidebar-widget">
                                        <h3>معلومات المقال</h3>
                                        <div className="widget-content">
                                            <div className="info-item">
                                                <i className="fas fa-user"></i>
                                                <div>
                                                    <span className="label">الكاتب</span>
                                                    <span className="value">{blog.author}</span>
                                                </div>
                                            </div>
                                            <div className="info-item">
                                                <i className="fas fa-calendar"></i>
                                                <div>
                                                    <span className="label">تاريخ النشر</span>
                                                    <span className="value">{formatDate(blog.published_at)}</span>
                                                </div>
                                            </div>
                                            <div className="info-item">
                                                <i className="fas fa-tag"></i>
                                                <div>
                                                    <span className="label">التصنيف</span>
                                                    <span className="value">{blog.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget cta-widget">
                                        <h3>هل تريد معرفة المزيد؟</h3>
                                        <p>تواصل معنا للحصول على استشارة مجانية حول مشروعك</p>
                                        <Link to="/contact" className="btn btn-primary">
                                            تواصل معنا
                                        </Link>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>

                    <div className="blog-navigation">
                        <div className="container">
                            <Link to="/blogs" className="back-to-blogs-btn">
                                <i className="fas fa-arrow-right"></i>
                                العودة للمدونة
                            </Link>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default BlogDetail;

