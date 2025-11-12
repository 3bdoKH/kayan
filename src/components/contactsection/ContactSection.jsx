import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.phone || !formData.message) {
            setFormStatus({
                submitted: true,
                error: true,
                message: 'يرجى ملء جميع الحقول المطلوبة'
            });
            return;
        }

        // Simulate form submission
        setFormStatus({
            submitted: true,
            error: false,
            message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.'
        });

        // Reset form after successful submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        // Reset form status after 5 seconds
        setTimeout(() => {
            setFormStatus({
                submitted: false,
                error: false,
                message: ''
            });
        }, 5000);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>تواصل معنا</h2>
                    <p>نحن هنا للإجابة على استفساراتك</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">

                        <div className="contact-card">
                            <div className="icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h3>اتصل بنا</h3>
                            <p>01055556363</p>
                            <p>01111505503</p>
                        </div>

                        <div className="contact-card">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3>البريد الإلكتروني</h3>
                            <p>info@kayan.com</p>
                            <p>support@kayan.com</p>
                        </div>

                        <div className="contact-card">
                            <div className="icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3>ساعات العمل</h3>
                            <p>السبت - الخميس: 9 صباحًا - 6 مساءً</p>
                            <p>الجمعة: مغلق</p>
                        </div>

                        <div className="social-links">
                            <a href="https://www.facebook.com/share/1GLuYUidDc/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://wa.me/+201111505503" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h3>أرسل لنا رسالة</h3>

                        {formStatus.submitted && (
                            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                                {formStatus.message}
                            </div>
                        )}

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">الاسم <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">رقم الهاتف <span className="required">*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">الرسالة <span className="required">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">إرسال الرسالة</button>
                        </form>

                        <div className="whatsapp-cta">
                            <p>للتواصل السريع عبر الواتساب</p>
                            <a href="https://wa.me/+201111505503" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                                <i className="fab fa-whatsapp"></i> تواصل عبر الواتساب
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
