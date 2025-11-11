import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';
import { image28 } from '../../utils/imports';
const AboutSection = () => {
    // Statistics data
    const stats = [
        { number: '15+', label: 'سنوات خبرة' },
        { number: '500+', label: 'مشروع منفذ' },
        { number: '500+', label: 'عميل سعيد' },
        { number: '50+', label: 'فني محترف' }
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="section-header">
                    <h2>من نحن</h2>
                    <p>نبذة عن كيان</p>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        <img src={image28} alt="عن الشركة" />
                        <div className="experience-badge">
                            <span className="years">15</span>
                            <span className="text">سنة خبرة</span>
                        </div>
                    </div>

                    <div className="about-text">
                        <h3>شركة رائدة في مجال التشطيبات والديكورات الداخلية</h3>
                        <p>
                            تأسست الشركه منذ أكثر من 15 عامًا بهدف تقديم خدمات تشطيب عالية الجودة بأسعار منافسة.
                            نفتخر بتنفيذ أكثر من 500 مشروع ناجح في مختلف أنحاء جمهورية مصر العربيه ونسعى دائمًا لتقديم أفضل الحلول
                            التي تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
                        </p>
                        <p>
                            نتميز بفريق عمل محترف من المهندسين والمصممين والفنيين ذوي الخبرة الواسعة،
                            ونستخدم أحدث التقنيات والمواد عالية الجودة لضمان تنفيذ المشاريع بأعلى معايير الجودة وفي الوقت المحدد.
                        </p>

                        <div className="about-features">
                            <div className="feature">
                                <i className="fas fa-check-circle"></i>
                                <span>جودة عالية</span>
                            </div>
                            <div className="feature">
                                <i className="fas fa-check-circle"></i>
                                <span>أسعار منافسة</span>
                            </div>
                            <div className="feature">
                                <i className="fas fa-check-circle"></i>
                                <span>التزام بالمواعيد</span>
                            </div>
                            <div className="feature">
                                <i className="fas fa-check-circle"></i>
                                <span>ضمان شامل</span>
                            </div>
                        </div>

                        <Link to="/about" className="btn btn-primary">اعرف أكثر عنا</Link>
                    </div>
                </div>

                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
