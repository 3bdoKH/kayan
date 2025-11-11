import React, { useEffect } from 'react';
import './OffersPage.css';
import SpecialOffers from '../../components/specialoffers/SpecialOffers';
import ContactSection from '../../components/contactsection/ContactSection';

const OffersPage = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="offers-page">
            <div className="page-header">
                <div className="container">
                    <h1>عروض خاصة</h1>
                    <p>عروض حصرية ومميزة لفترة محدودة</p>
                </div>
            </div>

            <div className="offers-intro">
                <div className="container">
                    <h2>عروض التشطيب والتقسيط</h2>
                    <p>
                        نقدم لكم مجموعة من العروض الحصرية للتشطيب بالتقسيط، مصممة خصيصًا لتناسب احتياجاتكم وميزانيتكم.
                        مع خبرة أكثر من 15 عامًا في مجال التشطيبات، نضمن لكم أعلى مستويات الجودة وبأسعار تنافسية.
                    </p>
                    <div className="offers-features">
                        <div className="feature">
                            <i className="fas fa-percentage"></i>
                            <h3>مقدم يبدأ من 20%</h3>
                        </div>
                        <div className="feature">
                            <i className="fas fa-calendar-alt"></i>
                            <h3>تقسيط حتى 36 شهر</h3>
                        </div>
                        <div className="feature">
                            <i className="fas fa-ban"></i>
                            <h3>بدون فوائد</h3>
                        </div>
                        <div className="feature">
                            <i className="fas fa-tools"></i>
                            <h3>جودة عالية</h3>
                        </div>
                    </div>
                </div>
            </div>

            <SpecialOffers />

            <div className="offers-documents">
                <div className="container">
                    <h2>المستندات المطلوبة</h2>
                    <div className="documents-grid">
                        <div className="document-card">
                            <h3>الأوراق الائتمانية</h3>
                            <ul>
                                <li>صورة البطاقة</li>
                                <li>إثبات دخل (وظيفة – نشاط حر)</li>
                                <li>دخل إضافي مثل عقود إيجار، ودائع أو شهادات بنكية</li>
                            </ul>
                        </div>

                        <div className="document-card">
                            <h3>مدينة جديدة (جهاز)</h3>
                            <ul>
                                <li>جواب تخصيص</li>
                                <li>رخصة مباني</li>
                                <li>إيصال كهرباء</li>
                                <li>عقد بيع وتوكيل</li>
                                <li>حظر تصرف من الجهاز</li>
                            </ul>
                        </div>

                        <div className="document-card">
                            <h3>مدينة عادية</h3>
                            <ul>
                                <li>عقد مسجل شهر عقاري أو توكيل بالبيع</li>
                                <li>رخصة مباني</li>
                                <li>إيصال كهرباء</li>
                                <li>شهادة تصرفات عقارية</li>
                            </ul>
                        </div>

                        <div className="document-card">
                            <h3>كمبوند</h3>
                            <ul>
                                <li>جواب تخصيص الأرض</li>
                                <li>رخصة مباني</li>
                                <li>عقد ملكية الوحدة</li>
                                <li>مخالصة مالية</li>
                                <li>حظر تصرف من الكمبوند</li>
                                <li>إيصال كهرباء</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection />
        </div>
    );
};

export default OffersPage;
