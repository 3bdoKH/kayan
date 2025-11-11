import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';
import { image13, image7, image8 } from '../../utils/imports';
const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: 'تشطيب كامل',
            description: 'خدمة متكاملة تشمل جميع أعمال التشطيب من الألف إلى الياء، بدءًا من التصميم وحتى التسليم النهائي.',
            icon: 'fas fa-home',
            image: image13
        },
        {
            id: 3,
            title: 'تصميم داخلي',
            description: 'خدمات تصميم داخلي احترافية تناسب ذوقك واحتياجاتك، مع تصورات ثلاثية الأبعاد للتصميم النهائي.',
            icon: 'fas fa-pencil-ruler',
            image: image7
        },
        {
            id: 4,
            title: 'ترميم وتجديد',
            description: 'خدمات ترميم وتجديد للمباني القديمة والمتهالكة، مع الحفاظ على الطابع الأصلي للمبنى.',
            icon: 'fas fa-hammer',
            image: image8
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>خدماتنا</h2>
                    <p>نقدم مجموعة متكاملة من خدمات التشطيب والتصميم والترميم</p>
                </div>

                <div className="services-grid">
                    {services.map(service => (
                        <div className="service-card" key={service.id}>
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                                <div className="service-overlay">
                                    <i className={service.icon}></i>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <h3>هل تبحث عن خدمة خاصة؟</h3>
                    <p>يمكننا تصميم حلول مخصصة تناسب احتياجاتك الفريدة</p>
                    <Link to="/contact" className="btn btn-primary">تواصل معنا</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
