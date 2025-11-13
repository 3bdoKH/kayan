import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import {
    image10,
    image11,
    image12,
    image13,
    image14,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image50,
    image51,
    image52,
    image53,
    image54,
    image55,
    image56,
    image57,
    image58,
    image62,
    image63,
    image64,
    image65,
    image66,
    image67,
    image68,
    image69,
    image70,
    image74,
    image75,
    image76,
    image77,
    image78,
    image79,
    image83,
    image84,
    image85,
    image92,
    image93,
    image94,
    image98,
    image99,
    image100,
    image101,
    image102,
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10
} from '../../utils/imports';
const Projects = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter state
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeCategory, setActiveCategory] = useState('all');

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

    // Projects data
    const projects = [
        {
            id: 1,
            title: 'تشطيب فيلا فاخرة',
            location: 'الشيخ زايد',
            category: 'villas',
            type: 'luxury',
            area: '350 متر مربع',
            duration: '6 أشهر',
            description: 'تشطيب فيلا فاخرة بالكامل بأحدث التصميمات العصرية وأجود الخامات.',
            images: [
                image10,
                image11,
                image12
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
            images: [
                image13,
                image14,
                image16,
            ],
            video: video2,
            featured: false
        },
        {
            id: 3,
            title: 'تشطيب مكتب إداري',
            location: 'التجمع الخامس',
            category: 'offices',
            type: 'luxury',
            area: '250 متر مربع',
            duration: '4 أشهر',
            description: 'تشطيب مكتب إداري بتصميم عصري يجمع بين الأناقة والعملية.',
            images: [
                image17,
                image18,
                image19,
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
            images: [
                image20,
                image21,
                image22,
            ],
            video: video4,
            featured: false
        },
        {
            id: 5,
            title: 'تشطيب فيلا متوسطة',
            location: 'الشروق',
            category: 'villas',
            type: 'medium',
            area: '280 متر مربع',
            duration: '5 أشهر',
            description: 'تشطيب فيلا بتصميم عصري وخامات عالية الجودة وبتكلفة متوسطة.',
            images: [
                image23,
                image24,
                image25,
            ],
            video: video5,
            featured: false
        },
        {
            id: 6,
            title: 'تشطيب شقة فاخرة',
            location: ' الشيخ زايد',
            category: 'apartments',
            type: 'luxury',
            area: '220 متر مربع',
            duration: '4 أشهر',
            description: 'تشطيب شقة فاخرة بتصميم عصري وخامات مستوردة عالية الجودة.',
            images: [
                image26,
                image27,
                image28,
            ],
            video: video6,
            featured: true
        },
        {
            id: 7,
            title: 'تشطيب مكتب هندسي',
            location: 'العبور',
            category: 'offices',
            type: 'medium',
            area: '150 متر مربع',
            duration: '3 أشهر',
            description: 'تشطيب مكتب هندسي بتصميم عملي يناسب طبيعة العمل الهندسي.',
            images: [
                image29,
                image30,
                image31,
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
            images: [
                image32,
                image33,
                image34,
            ],
            video: video8,
            featured: false
        },
        {
            id: 9,
            title: 'تشطيب فيلا اقتصادية',
            location: ' التجمع الاول',
            category: 'villas',
            type: 'economic',
            area: '200 متر مربع',
            duration: '4 أشهر',
            description: 'تشطيب فيلا بتصميم عصري وبتكلفة اقتصادية مناسبة للميزانيات المحدودة.',
            images: [
                image35,
                image36,
                image37,
            ],
            video: video9,
            featured: false
        },
        {
            id: 10,
            title: 'تشطيب فيلا ',
            location: 'العين السخنة',
            category: 'villas',
            type: 'luxury',
            area: '420 متر مربع',
            duration: '7 أشهر',
            description: 'تشطيب فيلا على البحر بتفاصيل فاخرة تراعي الإضاءة الطبيعية والإطلالة البحرية.',
            images: [
                image38,
                image39,
                image40,
            ],
            video: video10,
            featured: true
        },
        {
            id: 11,
            title: 'تصميم مكتب شركات ناشئة',
            location: 'مدينة نصر',
            category: 'offices',
            type: 'medium',
            area: '280 متر مربع',
            duration: '4 أشهر',
            description: 'مساحات عمل عصرية مرنة مع غرف اجتماعات تفاعلية تلائم الشركات الناشئة.',
            images: [
                image41,
                image42,
                image43,
            ],
            video: null,
            featured: true
        },
        {
            id: 14,
            title: 'تطوير مركز تجاري',
            location: '6 أكتوبر',
            category: 'offices',
            type: 'medium',
            area: '520 متر مربع',
            duration: '5 أشهر',
            description: 'إعادة تصميم مركز تجاري مع مناطق عرض مرنة ومسارات حركة واضحة للزوار.',
            images: [
                image50,
                image51,
                image52,
            ],
            video: null,
            featured: false
        },
        {
            id: 15,
            title: 'تجديد شقة كلاسيكية',
            location: 'وسط البلد',
            category: 'apartments',
            type: 'luxury',
            area: '210 متر مربع',
            duration: '3 أشهر',
            description: 'مزج الطابع الكلاسيكي مع تفاصيل عصرية للحفاظ على روح الشقة التاريخية.',
            images: [
                image53,
                image54,
                image55,
            ],
            video: null,
            featured: false
        },
        {
            id: 16,
            title: 'تشطيب فيلا حدائق',
            location: 'الرحاب',
            category: 'villas',
            type: 'medium',
            area: '320 متر مربع',
            duration: '5 أشهر',
            description: 'تنسيق داخلي وخارجي لفيلا مع حدائق مدمجة ومساحات معيشة مفتوحة.',
            images: [
                image56,
                image57,
                image58,
            ],
            video: null,
            featured: false
        },
        {
            id: 18,
            title: 'تشطيب شقق فندقية',
            location: 'القاهرة الجديدة',
            category: 'apartments',
            type: 'luxury',
            area: '260 متر مربع',
            duration: '4 أشهر',
            description: 'تشطيب شقق فندقية بأثاث مخصص وحلول تخزين ذكية لضمان راحة النزلاء.',
            images: [
                image62,
                image63,
                image64,
            ],
            video: null,
            featured: false
        },
        {
            id: 19,
            title: 'مجمع عيادات طبية',
            location: 'المهندسين',
            category: 'offices',
            type: 'medium',
            area: '360 متر مربع',
            duration: '5 أشهر',
            description: 'تصميم مجمع طبي متكامل يحقق أعلى معايير التعقيم وراحة المرضى.',
            images: [
                image65,
                image66,
                image67,
            ],
            video: null,
            featured: false
        },
        {
            id: 20,
            title: 'تشطيب شقة ذكية',
            location: 'مدينتي',
            category: 'apartments',
            type: 'luxury',
            area: '190 متر مربع',
            duration: '3 أشهر',
            description: 'تشطيب شقة مدمج بأنظمة المنزل الذكي والتحكم في الإضاءة والصوت.',
            images: [
                image68,
                image69,
                image70,
            ],
            video: null,
            featured: true
        },
        {
            id: 22,
            title: 'مركز تدريب مهني',
            location: 'حلوان',
            category: 'offices',
            type: 'economic',
            area: '280 متر مربع',
            duration: '4 أشهر',
            description: 'تهيئة مركز تدريب بتجهيزات متخصصة وقاعات متعددة الاستخدام.',
            images: [
                image74,
                image75,
                image76,
            ],
            video: null,
            featured: false
        },
        {
            id: 23,
            title: 'تشطيب شقة ',
            location: 'الإسكندرية',
            category: 'apartments',
            type: 'economic',
            area: '110 متر مربع',
            duration: '2 أشهر',
            description: 'تشطيب شقة عملية للشباب تعتمد على حلول التخزين الذكية والأثاث المتعدد الاستخدام.',
            images: [
                image77,
                image78,
                image79,
            ],
            video: null,
            featured: false
        },
        {
            id: 25,
            title: 'مركز خدمات هندسية',
            location: 'المعادى',
            category: 'offices',
            type: 'medium',
            area: '310 متر مربع',
            duration: '4 أشهر',
            description: 'تجهيز مركز خدمات هندسية مع مناطق استقبال حديثة ومختبرات تصميم.',
            images: [
                image83,
                image84,
                image85,
            ],
            video: null,
            featured: false
        },
        {
            id: 28,
            title: 'تشطيب شقة فندقية اقتصادية',
            location: 'العجوزة',
            category: 'apartments',
            type: 'economic',
            area: '95 متر مربع',
            duration: '2 أشهر',
            description: 'تشطيب شقة فندقية تلائم الرحلات القصيرة مع عزل صوتي كامل.',
            images: [
                image92,
                image93,
                image94,
            ],
            video: null,
            featured: false
        },
        {
            id: 30,
            title: 'تشطيب فيلا ',
            location: 'سانت كاترين',
            category: 'villas',
            type: 'luxury',
            area: '340 متر مربع',
            duration: '6 أشهر',
            description: 'تصميم فيلا في منطقة جبلية مع مراعاة العزل الحراري والخامات المقاومة للطقس.',
            images: [
                image98,
                image99,
                image100,
            ],
            video: null,
            featured: true
        },
        {
            id: 31,
            title: 'مركز أعمال مشترك',
            location: 'القاهرة الجديدة',
            category: 'offices',
            type: 'medium',
            area: '295 متر مربع',
            duration: '4 أشهر',
            description: 'تهيئة مساحات عمل مشتركة مرنة مع مناطق استراحة حديثة ومرافق اجتماعات.',
            images: [
                image101,
                image102,
                image38,
            ],
            video: null,
            featured: false
        }
    ];

    // Filter projects based on active filters
    const filteredProjects = projects.filter(project => {
        if (activeFilter === 'all' && activeCategory === 'all') {
            return true;
        } else if (activeFilter === 'all') {
            return project.category === activeCategory;
        } else if (activeCategory === 'all') {
            return project.type === activeFilter;
        } else {
            return project.category === activeCategory && project.type === activeFilter;
        }
    });

    // Project modal state
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Open project modal
    const openProjectModal = (project) => {
        setSelectedProject(project);
        setActiveImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    // Close project modal
    const closeProjectModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    // Handle image navigation in modal
    const navigateImage = (direction) => {
        if (!selectedProject) return;

        const imagesLength = selectedProject.images.length;

        if (direction === 'next') {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
        } else {
            setActiveImageIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength);
        }
    };

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (selectedProject && e.target.classList.contains('project-modal')) {
                closeProjectModal();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [selectedProject]);

    // Close modal on escape key
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && selectedProject) {
                closeProjectModal();
            }
        };

        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [selectedProject]);

    return (
        <div className="projects-page">
            <div className="page-header">
                <div className="header-overlay"></div>
                <div className="container">
                    <div className="header-content">
                        <span className="header-badge">
                            <i className="fas fa-images"></i>
                            {filteredProjects.length} مشروع
                        </span>
                        <h1>معرض الأعمال</h1>
                        <p>نماذج من مشاريعنا المنفذة بأعلى معايير الجودة</p>
                    </div>
                </div>
            </div>

            <section className="projects-gallery-section">
                <div className="container">
                    <div className="filters-container">
                        <div className="filter-section">
                            <div className="filter-header">
                                <i className="fas fa-filter"></i>
                                <span>تصفية حسب</span>
                            </div>

                            <div className="filter-tabs">
                                <div className="tab-group">
                                    <label>نوع المكان:</label>
                                    <div className="tabs">
                                        {filterCategories.map(category => (
                                            <button
                                                key={category.id}
                                                className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                                                onClick={() => setActiveCategory(category.id)}
                                            >
                                                {category.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="tab-group">
                                    <label>نوع التشطيب:</label>
                                    <div className="tabs">
                                        {filterTypes.map(type => (
                                            <button
                                                key={type.id}
                                                className={`tab-btn ${activeFilter === type.id ? 'active' : ''}`}
                                                onClick={() => setActiveFilter(type.id)}
                                            >
                                                {type.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="results-count">
                            <i className="fas fa-th"></i>
                            <span>عرض {filteredProjects.length} من أصل {projects.length} مشروع</span>
                        </div>
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <div
                                    className={`project-card ${project.featured ? 'featured' : ''}`}
                                    key={project.id}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {project.featured && (
                                        <div className="featured-badge">
                                            <i className="fas fa-crown"></i>
                                            مميز
                                        </div>
                                    )}

                                    <div className="card-image-wrapper">
                                        <img src={project.images[0]} alt={project.title} />
                                        <div className="image-overlay"></div>
                                        <div className="hover-actions">
                                            <button
                                                className="action-btn quick-view"
                                                onClick={() => openProjectModal(project)}
                                                title="معاينة سريعة"
                                            >
                                                <i className="fas fa-search-plus"></i>
                                            </button>
                                            <Link
                                                to={`/projects/${project.id}`}
                                                className="action-btn full-view"
                                                title="عرض التفاصيل"
                                            >
                                                <i className="fas fa-external-link-alt"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <div className="card-header">
                                            <h3>{project.title}</h3>
                                            <div className="project-meta">
                                                <span className="meta-item">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    {project.location}
                                                </span>
                                                <span className="meta-item">
                                                    <i className="fas fa-ruler-combined"></i>
                                                    {project.area}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="card-tags">
                                            <span className="tag category-tag">
                                                {filterCategories.find(cat => cat.id === project.category)?.name}
                                            </span>
                                            <span className="tag type-tag">
                                                {filterTypes.find(type => type.id === project.type)?.name}
                                            </span>
                                        </div>

                                        <p className="card-description">{project.description}</p>

                                        <div className="card-footer">
                                            <div className="duration">
                                                <i className="fas fa-clock"></i>
                                                <span>{project.duration}</span>
                                            </div>
                                            <button
                                                className="view-btn"
                                                onClick={() => openProjectModal(project)}
                                            >
                                                معاينة
                                                <i className="fas fa-arrow-left"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-projects">
                                <div className="no-projects-icon">
                                    <i className="fas fa-folder-open"></i>
                                </div>
                                <h3>لا توجد مشاريع مطابقة</h3>
                                <p>يرجى تغيير معايير البحث للعثور على المشاريع</p>
                                <button
                                    className="reset-btn"
                                    onClick={() => {
                                        setActiveCategory('all');
                                        setActiveFilter('all');
                                    }}
                                >
                                    إعادة تعيين الفلاتر
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <div className="project-modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeProjectModal}>
                            <i className="fas fa-times"></i>
                        </button>

                        <div className="modal-header">
                            <h2>{selectedProject.title}</h2>
                            <p><i className="fas fa-map-marker-alt"></i> {selectedProject.location}</p>
                        </div>

                        <div className="modal-gallery">
                            <div className="main-image">
                                <img src={selectedProject.images[activeImageIndex]} alt={selectedProject.title} />

                                <button className="nav-btn prev" onClick={() => navigateImage('prev')}>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                                <button className="nav-btn next" onClick={() => navigateImage('next')}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                            </div>

                            <div className="thumbnails">
                                {selectedProject.images.map((image, index) => (
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

                        <div className="modal-details">
                            <div className="details-grid">
                                <div className="detail-item">
                                    <h4>نوع المكان</h4>
                                    <p>{filterCategories.find(cat => cat.id === selectedProject.category)?.name}</p>
                                </div>
                                <div className="detail-item">
                                    <h4>نوع التشطيب</h4>
                                    <p>{filterTypes.find(type => type.id === selectedProject.type)?.name}</p>
                                </div>
                                <div className="detail-item">
                                    <h4>المساحة</h4>
                                    <p>{selectedProject.area}</p>
                                </div>
                                <div className="detail-item">
                                    <h4>مدة التنفيذ</h4>
                                    <p>{selectedProject.duration}</p>
                                </div>
                            </div>

                            <div className="project-description">
                                <h4>وصف المشروع</h4>
                                <p>{selectedProject.description}</p>
                            </div>

                            {selectedProject.video && (
                                <div className="project-video">
                                    <h4>فيديو المشروع</h4>
                                    <div className="video-container">
                                        <video controls>
                                            <source src={selectedProject.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <section className="projects-cta-section">
                <div className="container">
                    <div className="projects-cta">
                        <h2>هل أعجبك ما رأيت؟</h2>
                        <p>تواصل معنا الآن لتحويل منزلك إلى تحفة معمارية فريدة</p>
                        <a href="/contact" className="btn btn-primary">تواصل معنا</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
