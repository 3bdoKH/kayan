import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import { image10, image11, image12, image13, image14, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image1, image2, image3, image4, image5, image6, image7, image8, image9, image38, image39, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, image51, image52, image53, image54, image55, image56, image57, image58, image59, image60, image61, image62, image63, image64, image65, image66, image67, image68, image69, image70, image71, image72, image73, image74, image75, image76, image77, image78, image79, video1, video2, video3, video4, video5, video6, video7, video8, video9 } from '../../utils/imports';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [relatedProjects, setRelatedProjects] = useState([]);

    // Projects data (same as in Projects.jsx)
    const projects = useMemo(() => [
        {
            id: 1,
            title: 'تشطيب فيلا فاخرة',
            location: 'القاهرة',
            category: 'villas',
            type: 'luxury',
            area: '350 متر مربع',
            duration: '6 أشهر',
            description: 'تشطيب فيلا فاخرة بالكامل بأحدث التصميمات العصرية وأجود الخامات.',
            detailedDescription: `تشطيب فيلا فاخرة بالكامل بأحدث التصميمات العصرية وأجود الخامات. تم تنفيذ المشروع على مساحة 350 متر مربع في منطقة راقية بالقاهرة. استغرق المشروع 6 أشهر للتنفيذ الكامل من البداية وحتى التسليم.

            تضمنت أعمال التشطيب:
            - تصميم وتنفيذ الديكورات الداخلية بالكامل
            - أعمال السباكة والكهرباء بأعلى جودة
            - تركيب سيراميك وبورسلين مستورد
            - دهانات فاخرة من أفضل الماركات العالمية
            - تصميم وتنفيذ أعمال الإضاءة المتكاملة
            - تصميم وتنفيذ المطبخ والحمامات بأحدث التقنيات
            - تركيب أبواب خشبية مصنوعة يدويًا
            - تنسيق الحديقة الخارجية`,
            images: [
                image10,
                image11,
                image12,
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,
            ],
            video: video1,
            featured: true
        },
        {
            id: 2,
            title: 'تصميم داخلي لشقة',
            location: 'القاهرة',
            category: 'apartments',
            type: 'medium',
            area: '180 متر مربع',
            duration: '3 أشهر',
            description: 'تصميم وتنفيذ ديكور داخلي لشقة سكنية بتصميم عصري وألوان متناسقة.',
            detailedDescription: `تصميم وتنفيذ ديكور داخلي لشقة سكنية بتصميم عصري وألوان متناسقة. تم تنفيذ المشروع على مساحة 180 متر مربع في القاهرة. استغرق المشروع 3 أشهر للتنفيذ الكامل.

            تضمنت أعمال التشطيب:
            - تصميم مخصص للمساحات المعيشية
            - اختيار ألوان متناسقة تعكس ذوق العميل
            - تنفيذ أعمال الجبس والديكورات
            - تركيب إضاءة مميزة لإبراز جماليات التصميم
            - اختيار وتركيب الأرضيات المناسبة
            - تصميم وتنفيذ خزائن الحائط والمطبخ
            - تنسيق الأثاث والإكسسوارات`,
            images: [
                image13,
                image14,
                image16,
                image38,
                image39,
                image40,
                image41,
                image42,
                image43,
            ],
            video: video2,
            featured: false
        },
        {
            id: 3,
            title: 'تشطيب مكتب إداري',
            location: 'الاسكندرية',
            category: 'offices',
            type: 'luxury',
            area: '250 متر مربع',
            duration: '4 أشهر',
            description: 'تشطيب مكتب إداري بتصميم عصري يجمع بين الأناقة والعملية.',
            detailedDescription: `تشطيب مكتب إداري بتصميم عصري يجمع بين الأناقة والعملية. تم تنفيذ المشروع على مساحة 250 متر مربع في الاسكندرية. استغرق المشروع 4 أشهر للتنفيذ الكامل.

            تضمنت أعمال التشطيب:
            - تقسيم المساحات بشكل عملي يناسب طبيعة العمل
            - تصميم وتنفيذ قاعات الاجتماعات
            - تجهيز المكاتب الإدارية والتنفيذية
            - تنفيذ شبكات الكهرباء والإنترنت المتكاملة
            - تركيب أنظمة إضاءة موفرة للطاقة
            - تصميم منطقة استقبال تعكس هوية الشركة
            - تنفيذ أعمال العزل الصوتي للقاعات الرئيسية`,
            images: [
                image17,
                image18,
                image19,
                image44,
                image45,
                image46,
                image47,
                image48,
                image49,
                image50,
            ],
            video: video3,
            featured: true
        },
        {
            id: 4,
            title: 'تجديد شقة سكنية',
            location: 'الجيزة',
            category: 'apartments',
            type: 'economic',
            area: '120 متر مربع',
            duration: '2 أشهر',
            description: 'تجديد شقة سكنية قديمة وتحويلها إلى تصميم عصري بتكلفة اقتصادية.',
            detailedDescription: `تجديد شقة سكنية قديمة وتحويلها إلى تصميم عصري بتكلفة اقتصادية. تم تنفيذ المشروع على مساحة 120 متر مربع في الجيزة. استغرق المشروع شهرين للتنفيذ الكامل.

            تضمنت أعمال التجديد:
            - إعادة توزيع المساحات لاستغلالها بشكل أفضل
            - تجديد شبكات السباكة والكهرباء
            - معالجة الرطوبة وإصلاح الجدران
            - تركيب أرضيات جديدة بتكلفة مناسبة
            - دهانات عصرية بألوان فاتحة لإضفاء الاتساع
            - تجديد المطبخ والحمامات
            - تركيب إضاءة موفرة للطاقة`,
            images: [
                image20,
                image21,
                image22,
                image51,
                image52,
                image53,
                image54,
                image55,
                image56,
                image57,
            ],
            video: video4,
            featured: false
        },
        {
            id: 5,
            title: 'تشطيب فيلا متوسطة',
            location: 'المنوفية',
            category: 'villas',
            type: 'medium',
            area: '280 متر مربع',
            duration: '5 أشهر',
            description: 'تشطيب فيلا بتصميم عصري وخامات عالية الجودة وبتكلفة متوسطة.',
            detailedDescription: `تشطيب فيلا بتصميم عصري وخامات عالية الجودة وبتكلفة متوسطة. تم تنفيذ المشروع على مساحة 280 متر مربع في المنوفية. استغرق المشروع 5 أشهر للتنفيذ الكامل.

            تضمنت أعمال التشطيب:
            - تصميم وتنفيذ الواجهة الخارجية
            - أعمال التشطيبات الداخلية الكاملة
            - تركيب سيراميك وبورسلين محلي عالي الجودة
            - تصميم وتنفيذ المطبخ والحمامات
            - أعمال الكهرباء والسباكة المتكاملة
            - دهانات بألوان عصرية متناسقة
            - تنسيق الحديقة الخارجية`,
            images: [
                image23,
                image24,
                image25,
                image58,
                image59,
                image60,
                image61,
                image62,
                image63,
                image64,
            ],
            video: video5,
            featured: false
        },
        {
            id: 6,
            title: 'تشطيب شقة فاخرة',
            location: 'كفر الشيخ',
            category: 'apartments',
            type: 'luxury',
            area: '220 متر مربع',
            duration: '4 أشهر',
            description: 'تشطيب شقة فاخرة بتصميم عصري وخامات مستوردة عالية الجودة.',
            detailedDescription: `تشطيب شقة فاخرة بتصميم عصري وخامات مستوردة عالية الجودة. تم تنفيذ المشروع على مساحة 220 متر مربع في كفر الشيخ. استغرق المشروع 4 أشهر للتنفيذ الكامل.

            تضمنت أعمال التشطيب:
            - تصميم داخلي فريد يعكس ذوق العميل
            - استخدام خامات مستوردة عالية الجودة
            - تركيب رخام وبورسلين إيطالي
            - تصميم وتنفيذ أسقف جبسية معقدة
            - تركيب نظام إضاءة ذكي قابل للتحكم
            - تصميم وتنفيذ مطبخ فاخر بتقنيات حديثة
            - تركيب أبواب خشبية مصنوعة يدويًا`,
            images: [
                image26,
                image27,
                image28,
                image65,
                image66,
                image67,
                image68,
                image69,
                image70,
                image71,
                image72,
            ],
            video: video6,
            featured: true
        },
        {
            id: 7,
            title: 'تشطيب مكتب هندسي',
            location: 'القاهرة',
            category: 'offices',
            type: 'medium',
            area: '150 متر مربع',
            duration: '3 أشهر',
            description: 'تشطيب مكتب هندسي بتصميم عملي يناسب طبيعة العمل الهندسي.',
            detailedDescription: `تشطيب مكتب هندسي بتصميم عملي يناسب طبيعة العمل الهندسي. تم تنفيذ المشروع على مساحة 150 متر مربع في القاهرة. استغرق المشروع 3 أشهر للتنفيذ الكامل.

            تضمنت أعمال التشطيب:
            - تقسيم المساحة بشكل يناسب العمل الهندسي
            - تصميم وتنفيذ مكاتب العمل والرسم
            - تجهيز قاعة اجتماعات متعددة الاستخدامات
            - تركيب إضاءة مناسبة للعمل الهندسي
            - تنفيذ شبكات كهرباء وإنترنت متطورة
            - تصميم منطقة عرض للمشاريع والنماذج
            - تركيب أنظمة تخزين وأرشفة للمخططات`,
            images: [
                image29,
                image30,
                image31,
                image73,
                image74,
                image75,
                image76,
                image77,
                image78,
                image79,
            ],
            video: video7,
            featured: false
        },
        {
            id: 8,
            title: 'تشطيب شقة اقتصادية',
            location: 'الاسكندرية',
            category: 'apartments',
            type: 'economic',
            area: '100 متر مربع',
            duration: '2 أشهر',
            description: 'تشطيب شقة بتصميم عصري وبتكلفة اقتصادية مناسبة للميزانيات المحدودة.',
            detailedDescription: `تشطيب شقة بتصميم عصري وبتكلفة اقتصادية مناسبة للميزانيات المحدودة. تم تنفيذ المشروع على مساحة 100 متر مربع في الاسكندرية. استغرق المشروع شهرين للتنفيذ الكامل.

            تضمنت أعمال التشطيب:
            - استغلال المساحات بشكل مثالي
            - استخدام خامات محلية عالية الجودة
            - تنفيذ أعمال السباكة والكهرباء الأساسية
            - تركيب سيراميك محلي بتصميمات عصرية
            - دهانات بألوان فاتحة لإضفاء الاتساع
            - تصميم وتنفيذ مطبخ عملي بتكلفة مناسبة
            - تركيب أبواب خشبية اقتصادية`,
            images: [
                image32,
                image33,
                image34,
                image7,
                image8,
                image9,
            ],
            video: video8,
            featured: false
        },
        {
            id: 9,
            title: 'تشطيب فيلا اقتصادية',
            location: 'اسوان',
            category: 'villas',
            type: 'economic',
            area: '200 متر مربع',
            duration: '4 أشهر',
            description: 'تشطيب فيلا بتصميم عصري وبتكلفة اقتصادية مناسبة للميزانيات المحدودة.',
            detailedDescription: `تشطيب فيلا بتصميم عصري وبتكلفة اقتصادية مناسبة للميزانيات المحدودة. تم تنفيذ المشروع على مساحة 200 متر مربع في اسوان. استغرق المشروع 4 أشهر للتنفيذ الكامل.

            تضمنت أعمال التشطيب:
            - تصميم واجهة بسيطة وعملية
            - تنفيذ التشطيبات الداخلية الأساسية
            - استخدام خامات محلية عالية الجودة
            - تركيب سيراميك وبورسلين اقتصادي
            - تنفيذ أعمال السباكة والكهرباء
            - دهانات بألوان عصرية
            - تنسيق بسيط للحديقة الخارجية`,
            images: [
                image35,
                image36,
                image37,
            ],
            video: video9,
            featured: false
        }
    ], []);

    // Filter categories
    const filterCategories = [
        { id: 'all', name: 'الكل' },
        { id: 'apartments', name: 'شقق' },
        { id: 'villas', name: 'فيلات' },
        { id: 'offices', name: 'مكاتب' }
    ];

    // Filter types
    const filterTypes = [
        { id: 'all', name: 'الكل' },
        { id: 'luxury', name: 'فاخر' },
        { id: 'medium', name: 'متوسط' },
        { id: 'economic', name: 'اقتصادي' }
    ];

    // Find the project by id
    useEffect(() => {
        window.scrollTo(0, 0);

        const projectId = parseInt(id);
        const foundProject = projects.find(p => p.id === projectId);

        if (foundProject) {
            setProject(foundProject);

            // Find related projects (same category or type)
            const related = projects
                .filter(p =>
                    p.id !== projectId &&
                    (p.category === foundProject.category || p.type === foundProject.type)
                )
                .slice(0, 3); // Limit to 3 related projects

            setRelatedProjects(related);
        }

        setLoading(false);
    }, [id, projects]);

    // Navigate to previous/next image
    const navigateImage = (direction) => {
        if (!project) return;

        const imagesLength = project.images.length;

        if (direction === 'next') {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
        } else {
            setActiveImageIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength);
        }
    };

    // Handle 404 - project not found
    if (!loading && !project) {
        return (
            <div className="project-not-found">
                <div className="container">
                    <div className="not-found-content">
                        <i className="fas fa-exclamation-circle"></i>
                        <h2>المشروع غير موجود</h2>
                        <p>عذراً، لم نتمكن من العثور على المشروع المطلوب</p>
                        <Link to="/projects" className="btn btn-primary">العودة لمعرض الأعمال</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            {loading ? (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>جاري تحميل بيانات المشروع...</p>
                </div>
            ) : (
                <>
                    <div className="project-header">
                        <div className="container">
                            <div className="breadcrumbs">
                                <Link to="/">الرئيسية</Link>
                                <span>/</span>
                                <Link to="/projects">معرض الأعمال</Link>
                                <span>/</span>
                                <span className="current">{project.title}</span>
                            </div>
                            <h1>{project.title}</h1>
                            <div className="project-meta">
                                <div className="meta-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>{project.location}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fas fa-building"></i>
                                    <span>{filterCategories.find(cat => cat.id === project.category)?.name}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fas fa-paint-roller"></i>
                                    <span>{filterTypes.find(type => type.id === project.type)?.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-gallery-section">
                        <div className="container">
                            <div className="project-gallery">
                                <div className="main-image">
                                    <img src={project.images[activeImageIndex]} alt={project.title} />

                                    <button className="nav-btn prev" onClick={() => navigateImage('prev')}>
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                    <button className="nav-btn next" onClick={() => navigateImage('next')}>
                                        <i className="fas fa-chevron-left"></i>
                                    </button>

                                    <div className="image-counter">
                                        {activeImageIndex + 1} / {project.images.length}
                                    </div>
                                </div>

                                <div className="thumbnails">
                                    {project.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`thumbnail ${activeImageIndex === index ? 'active' : ''}`}
                                            onClick={() => setActiveImageIndex(index)}
                                        >
                                            <img src={image} alt={`صورة ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-info-section">
                        <div className="container">
                            <div className="project-info-grid">
                                <div className="project-details">
                                    <h2>تفاصيل المشروع</h2>

                                    <div className="details-grid">
                                        <div className="detail-item">
                                            <h4>نوع المكان</h4>
                                            <p>{filterCategories.find(cat => cat.id === project.category)?.name}</p>
                                        </div>
                                        <div className="detail-item">
                                            <h4>نوع التشطيب</h4>
                                            <p>{filterTypes.find(type => type.id === project.type)?.name}</p>
                                        </div>
                                        <div className="detail-item">
                                            <h4>المساحة</h4>
                                            <p>{project.area}</p>
                                        </div>
                                        <div className="detail-item">
                                            <h4>مدة التنفيذ</h4>
                                            <p>{project.duration}</p>
                                        </div>
                                        <div className="detail-item">
                                            <h4>الموقع</h4>
                                            <p>{project.location}</p>
                                        </div>
                                    </div>

                                    <div className="project-description">
                                        <h3>وصف المشروع</h3>
                                        <p>{project.detailedDescription}</p>
                                    </div>
                                </div>

                                <div className="project-sidebar">
                                    {project.video && (
                                        <div className="project-video">
                                            <h3>فيديو المشروع</h3>
                                            <div className="video-container">
                                                <video controls>
                                                    <source src={project.video} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    )}

                                    <div className="project-cta">
                                        <h3>هل أعجبك هذا المشروع؟</h3>
                                        <p>تواصل معنا الآن للحصول على مشروع مماثل</p>
                                        <Link to="/contact" className="btn btn-primary">تواصل معنا</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {relatedProjects.length > 0 && (
                        <div className="related-projects-section">
                            <div className="container">
                                <h2>مشاريع مشابهة</h2>

                                <div className="related-projects-grid">
                                    {relatedProjects.map(relatedProject => (
                                        <div
                                            className="related-project-card"
                                            key={relatedProject.id}
                                            onClick={() => navigate(`/projects/${relatedProject.id}`)}
                                        >
                                            <div className="project-image">
                                                <img src={relatedProject.images[0]} alt={relatedProject.title} />
                                                <div className="project-overlay">
                                                    <div className="project-details">
                                                        <h3>{relatedProject.title}</h3>
                                                        <p><i className="fas fa-map-marker-alt"></i> {relatedProject.location}</p>
                                                        <span className="view-project">عرض المشروع</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="all-projects-link">
                                    <Link to="/projects" className="btn btn-secondary">
                                        <i className="fas fa-th-large"></i> عرض كل المشاريع
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="project-navigation">
                        <div className="container">
                            <div className="nav-buttons">
                                {project.id > 1 && (
                                    <Link to={`/projects/${project.id - 1}`} className="nav-button prev">
                                        <i className="fas fa-arrow-right"></i>
                                        <span>المشروع السابق</span>
                                    </Link>
                                )}

                                <Link to="/projects" className="nav-button all">
                                    <i className="fas fa-th-large"></i>
                                    <span>كل المشاريع</span>
                                </Link>

                                {project.id < projects.length && (
                                    <Link to={`/projects/${project.id + 1}`} className="nav-button next">
                                        <span>المشروع التالي</span>
                                        <i className="fas fa-arrow-left"></i>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectDetail;
