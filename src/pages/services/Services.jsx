import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { image5, image7, image8, image30, image31, image32, image33, image34, image35 } from '../../utils/imports';
const Services = () => {
    const [activeService, setActiveService] = useState(null);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);

        // Check if there's a hash in the URL
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    }, []);

    // Main services data
    const mainServices = [
        {
            id: 'service-1',
            title: 'تشطيب كامل',
            description: 'خدمة متكاملة تشمل جميع أعمال التشطيب من الألف إلى الياء، بدءًا من التصميم وحتى التسليم النهائي.',
            icon: 'fas fa-home',
            image: image5,
            features: [
                'تصميم داخلي كامل للمساحة',
                'أعمال السباكة والكهرباء',
                'أعمال النجارة والألمنيوم',
                'تركيب السيراميك والرخام',
                'أعمال الدهانات والديكور',
                'تركيب الأسقف المعلقة',
                'تصميم وتنفيذ المطبخ',
                'تصميم وتنفيذ الحمامات',
                'تشطيب الأرضيات والجدران'
            ]
        },
        {
            id: 'service-3',
            title: 'تصميم داخلي',
            description: 'خدمات تصميم داخلي احترافية تناسب ذوقك واحتياجاتك، مع تصورات ثلاثية الأبعاد للتصميم النهائي.',
            icon: 'fas fa-pencil-ruler',
            image: image7,
            features: [
                'تصميم المساحات الداخلية',
                'اختيار الألوان والخامات',
                'تصميم الإضاءة',
                'تصميم الأثاث المخصص',
                'تصميم ثلاثي الأبعاد',
                'تصميم المطابخ والحمامات',
                'اختيار قطع الأثاث والإكسسوارات'
            ]
        },
        {
            id: 'service-4',
            title: 'ترميم وتجديد',
            description: 'خدمات ترميم وتجديد للمباني القديمة والمتهالكة، مع الحفاظ على الطابع الأصلي للمبنى.',
            icon: 'fas fa-hammer',
            image: image8,
            features: [
                'إصلاح التشققات والتصدعات',
                'ترميم الأسقف والجدران',
                'تجديد السباكة والكهرباء',
                'تجديد الأرضيات والسيراميك',
                'تجديد الأبواب والنوافذ',
                'إعادة الدهانات والتشطيبات',
                'تحديث المطابخ والحمامات'
            ]
        }
    ];

    // Sub services data
    const subServices = [
        {
            id: 'sub-service-1',
            title: 'أعمال السباكة',
            description: 'تنفيذ جميع أعمال السباكة بأعلى معايير الجودة والسلامة، باستخدام أفضل المواد والتقنيات الحديثة.',
            icon: 'fas fa-faucet',
            image: image30,
            features: [
                'تأسيس شبكات المياه والصرف',
                'تركيب الأدوات الصحية',
                'تركيب خزانات المياه والسخانات',
                'تركيب فلاتر المياه',
                'صيانة وإصلاح التسريبات',
                'تركيب مضخات المياه'
            ]
        },
        {
            id: 'sub-service-2',
            title: 'أعمال الكهرباء',
            description: 'تنفيذ جميع أعمال الكهرباء بدقة واحترافية عالية، مع الالتزام بمعايير السلامة العالمية.',
            icon: 'fas fa-bolt',
            image: image31,
            features: [
                'تأسيس الشبكات الكهربائية',
                'تركيب لوحات الكهرباء',
                'تركيب الإضاءة بأنواعها',
                'تركيب أنظمة الإنذار والحماية',
                'تركيب أنظمة الطاقة الشمسية',
                'صيانة وإصلاح الأعطال الكهربائية'
            ]
        },
        {
            id: 'sub-service-3',
            title: 'أعمال الدهانات',
            description: 'تنفيذ جميع أنواع الدهانات الداخلية والخارجية، مع اختيار أفضل الخامات التي تناسب احتياجاتك.',
            icon: 'fas fa-paint-roller',
            image: image32,
            features: [
                'دهانات داخلية وخارجية',
                'دهانات ديكورية',
                'دهانات إيبوكسي',
                'دهانات مقاومة للرطوبة',
                'دهانات عازلة للحرارة',
                'ورق جدران وديكورات خاصة'
            ]
        },
        {
            id: 'sub-service-4',
            title: 'أعمال النجارة',
            description: 'تصميم وتنفيذ جميع أعمال النجارة بأعلى مستويات الدقة والجودة، باستخدام أجود أنواع الأخشاب.',
            icon: 'fas fa-cut',
            image: image33,
            features: [
                'تصنيع وتركيب الأبواب الخشبية',
                'تصنيع وتركيب المطابخ الخشبية',
                'تصنيع وتركيب خزائن الملابس',
                'تصنيع وتركيب الأثاث المخصص',
                'أعمال الديكورات الخشبية',
                'أعمال الأرضيات الخشبية'
            ]
        },
        {
            id: 'sub-service-5',
            title: 'أعمال الألمنيوم والزجاج',
            description: 'تصميم وتنفيذ جميع أعمال الألمنيوم والزجاج بأحدث التقنيات والتصميمات العصرية.',
            icon: 'fas fa-window-maximize',
            image: image34,
            features: [
                'تركيب النوافذ والأبواب الألمنيوم',
                'تركيب الواجهات الزجاجية',
                'تركيب القواطع الزجاجية',
                'تركيب الدرابزينات الزجاجية',
                'تركيب المرايا والزجاج المزخرف',
                'تركيب الشتر والمظلات'
            ]
        },
        {
            id: 'sub-service-6',
            title: 'أعمال الجبس والديكور',
            description: 'تصميم وتنفيذ جميع أعمال الجبس والديكور بتصميمات عصرية ومبتكرة تضيف لمسة جمالية للمكان.',
            icon: 'fas fa-brush',
            image: image35,
            features: [
                'تركيب الأسقف المعلقة',
                'تنفيذ ديكورات الجبس بورد',
                'تنفيذ الفواصل والقواطع',
                'تنفيذ الأعمدة والأقواس',
                'تنفيذ الإضاءة المخفية',
                'تنفيذ الديكورات الجصية'
            ]
        }
    ];

    // Handle service click
    const toggleService = (id) => {
        setActiveService(activeService === id ? null : id);
    };

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="header-overlay"></div>
                <div className="container">
                    <div className="header-content">
                        <h1>خدماتنا</h1>
                        <p>نقدم مجموعة متكاملة من خدمات التشطيب والديكور</p>
                        <div className="header-divider"></div>
                    </div>
                </div>
            </div>

            <section className="main-services-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">خدماتنا المميزة</span>
                        <h2>خدماتنا الرئيسية</h2>
                        <p>حلول متكاملة لتشطيب منزلك</p>
                    </div>

                    <div className="services-grid">
                        {mainServices.map((service, index) => (
                            <div
                                className={`service-card ${activeService === service.id ? 'expanded' : ''}`}
                                key={service.id}
                                id={service.id}
                            >
                                <div className="service-card-inner">
                                    <div className="service-front">
                                        <div className="service-image-wrapper">
                                            <img src={service.image} alt={service.title} />
                                            <div className="service-overlay"></div>
                                        </div>
                                        <div className="service-icon-badge">
                                            <i className={service.icon}></i>
                                        </div>
                                        <div className="service-info">
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                            <button
                                                className="expand-btn"
                                                onClick={() => toggleService(service.id)}
                                            >
                                                {activeService === service.id ? 'إخفاء التفاصيل' : 'اعرف المزيد'}
                                                <i className={`fas fa-chevron-${activeService === service.id ? 'up' : 'down'}`}></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className={`service-expanded ${activeService === service.id ? 'active' : ''}`}>
                                        <div className="expanded-content">
                                            <h4>ما نقدمه في هذه الخدمة:</h4>
                                            <div className="features-grid">
                                                {service.features.map((feature, idx) => (
                                                    <div className="feature-item" key={idx}>
                                                        <div className="feature-icon">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <Link to="/contact" className="btn btn-primary">
                                                <i className="fas fa-paper-plane"></i>
                                                اطلب هذه الخدمة
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sub-services-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">تخصصنا</span>
                        <h2>خدمات إضافية</h2>
                        <p>خدمات متخصصة لتلبية احتياجاتك</p>
                    </div>

                    <div className="sub-services-grid">
                        {subServices.map((service, index) => (
                            <div className="sub-service-card" key={service.id} id={service.id}>
                                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                                <div className="sub-service-header">
                                    <div className="sub-service-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3>{service.title}</h3>
                                </div>
                                <div className="sub-service-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="sub-service-content">
                                    <p>{service.description}</p>
                                    <div className="features-list">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="feature-chip">
                                                <i className="fas fa-star"></i>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-cta-section">
                <div className="container">
                    <div className="service-cta">
                        <div className="cta-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h2>هل تبحث عن خدمة خاصة؟</h2>
                        <p>نحن نقدم حلولًا مخصصة لتلبية احتياجاتك الفريدة. تواصل معنا لمناقشة متطلباتك.</p>
                        <Link to="/contact" className="btn btn-primary">
                            <i className="fas fa-comments"></i>
                            تواصل معنا
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
