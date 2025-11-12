import React, { useState, useEffect } from 'react';
import './Contact.css';
import { image40 } from '../../utils/imports';
const Contact = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.phone || !formData.message) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        // Get service label
        const serviceLabel = serviceOptions.find(opt => opt.value === formData.service)?.label || 'غير محدد';

        // Create WhatsApp message
        let message = `
📧 *رسالة تواصل جديدة*

👤 *الاسم:* ${formData.name}
📱 *رقم الهاتف:* ${formData.phone}`;

        if (formData.email) {
            message += `\n✉️ *البريد الإلكتروني:* ${formData.email}`;
        }

        if (formData.service) {
            message += `\n🔧 *الخدمة المطلوبة:* ${serviceLabel}`;
        }

        message += `\n\n💬 *الرسالة:*\n${formData.message}`;

        message = message.trim();

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/+201111505503?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    // Services options
    const serviceOptions = [
        { value: '', label: 'اختر الخدمة' },
        { value: 'full', label: 'تشطيب كامل' },
        { value: 'design', label: 'تصميم داخلي' },
        { value: 'renovation', label: 'ترميم وتجديد' },
        { value: 'other', label: 'خدمة أخرى' }
    ];

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="header-overlay"></div>
                <div className="container">
                    <div className="header-content">
                        <span className="header-badge">
                            <i className="fas fa-headset"></i>
                            نحن متاحون دائماً
                        </span>
                        <h1>تواصل معنا</h1>
                        <p>نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أحلامك</p>
                    </div>
                </div>
            </div>

            <section className="contact-info-section">
                <div className="container">
                    <div className="info-cards-wrapper">
                        <div className="contact-info-card phone-card">
                            <div className="card-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h3>اتصل بنا</h3>
                            <div className="card-content">
                                <a href="tel:01055556363" className="contact-link">01055556363</a>
                                <a href="tel:01111505503" className="contact-link">01111505503</a>
                            </div>
                            <div className="card-footer">
                                <span>متاح على مدار الساعة</span>
                            </div>
                        </div>

                        <div className="contact-info-card email-card">
                            <div className="card-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3>البريد الإلكتروني</h3>
                            <div className="card-content">
                                <a href="mailto:info@tashteeb.com" className="contact-link">info@tashteeb.com</a>
                                <a href="mailto:support@tashteeb.com" className="contact-link">support@tashteeb.com</a>
                            </div>
                            <div className="card-footer">
                                <span>نرد خلال 24 ساعة</span>
                            </div>
                        </div>


                        <div className="contact-info-card hours-card">
                            <div className="card-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3>ساعات العمل</h3>
                            <div className="card-content">
                                <p>السبت - الخميس</p>
                                <p className="time">9 صباحًا - 6 مساءً</p>
                                <p className="closed">الجمعة: مغلق</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-section">
                        <h3>تابعنا على السوشيال ميديا</h3>
                        <div className="social-links-contact">
                            <a href="https://www.facebook.com/share/1GLuYUidDc/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                                <i className="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="https://wa.me/+201111505503" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                                <i className="fab fa-whatsapp"></i>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="container">
                    <div className="section-intro">
                        <h2>أرسل لنا رسالة</h2>
                        <p>املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</p>
                    </div>

                    <div className="contact-grid">
                        <div className="form-wrapper">
                            <div className="form-header">
                                <div className="form-icon">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                                <h3>نموذج التواصل</h3>
                                <p>املأ البيانات وسيتم فتح الواتساب مباشرة</p>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="fas fa-user"></i>
                                            الاسم <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="أدخل اسمك الكامل"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            <i className="fas fa-mobile-alt"></i>
                                            رقم الهاتف <span className="required">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="01xxxxxxxxx"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i className="fas fa-envelope"></i>
                                            البريد الإلكتروني
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="example@domain.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service">
                                            <i className="fas fa-concierge-bell"></i>
                                            الخدمة المطلوبة
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            {serviceOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="message">
                                        <i className="fas fa-comment-dots"></i>
                                        رسالتك <span className="required">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="اكتب رسالتك هنا..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    <i className="fab fa-whatsapp"></i>
                                    <span>إرسال عبر الواتساب</span>
                                </button>
                            </form>
                        </div>

                        <div className="quick-contact-sidebar">
                            <div className="whatsapp-card">
                                <div className="whatsapp-icon">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <h3>تواصل فوري</h3>
                                <p>للاستفسارات العاجلة، تحدث معنا مباشرة على الواتساب</p>
                                <a href="https://wa.me/+201111505503" target="_blank" rel="noopener noreferrer" className="whatsapp-direct-btn">
                                    <i className="fab fa-whatsapp"></i>
                                    <span>فتح الواتساب</span>
                                </a>
                            </div>

                            <div className="contact-image-card">
                                <img src={image40} alt="تواصل معنا" />
                                <div className="image-overlay">
                                    <p>نحن في خدمتك</p>
                                </div>
                            </div>

                            <div className="quick-tips">
                                <h4>نصائح سريعة</h4>
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>اذكر نوع الخدمة المطلوبة</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>حدد الموقع والمساحة التقريبية</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>أرفق صور إن وجدت</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">أسئلة شائعة</span>
                        <h2>لديك أسئلة؟</h2>
                        <p>إليك إجابات على الأسئلة الأكثر شيوعاً</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-card">
                            <div className="faq-icon">
                                <i className="fas fa-question"></i>
                            </div>
                            <h3>كيف يمكنني الحصول على عرض سعر؟</h3>
                            <p>يمكنك الحصول على عرض سعر من خلال ملء نموذج التواصل أعلاه، أو من خلال الاتصال بنا مباشرة على الأرقام الموضحة، وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن.</p>
                        </div>

                        <div className="faq-card">
                            <div className="faq-icon">
                                <i className="fas fa-question"></i>
                            </div>
                            <h3>هل يمكنني زيارة معرض الشركة؟</h3>
                            <p>نعم، يمكنك زيارة معرضنا في أي من فروعنا خلال ساعات العمل الرسمية، ويفضل تحديد موعد مسبق لضمان تقديم أفضل خدمة لك.</p>
                        </div>

                        <div className="faq-card">
                            <div className="faq-icon">
                                <i className="fas fa-question"></i>
                            </div>
                            <h3>هل تقدمون خدمات خارج المدن الرئيسية؟</h3>
                            <p>نعم، نقدم خدماتنا في جميع أنحاء المملكة، ولدينا فرق متنقلة يمكنها الوصول إلى مختلف المناطق لتنفيذ المشاريع.</p>
                        </div>

                        <div className="faq-card">
                            <div className="faq-icon">
                                <i className="fas fa-question"></i>
                            </div>
                            <h3>كم تستغرق الرد على استفساراتي؟</h3>
                            <p>نحرص على الرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى، وفي حالة الاستفسارات العاجلة يمكنك التواصل معنا عبر الواتساب للحصول على رد سريع.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
