import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { image20, image21, image22, image23 } from '../../utils/imports';
const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: 'أحمد محمد',
            position: 'مالك فيلا',
            image: image20,
            quote: 'تجربتي مع شركة تشطيب بالتقسيط كانت رائعة من البداية للنهاية. فريق العمل محترف جدًا والنتيجة النهائية تجاوزت توقعاتي. أنصح بهم بشدة لأي شخص يبحث عن تشطيب عالي الجودة.'
        },
        {
            id: 2,
            name: 'سارة عبدالله',
            position: 'صاحبة شقة',
            image: image21,
            quote: 'أكثر ما أعجبني في شركة تشطيب بالتقسيط هو التزامهم بالمواعيد والميزانية المتفق عليها. لم يكن هناك أي مفاجآت في التكلفة، والعمل انتهى في الوقت المحدد تمامًا. شكرًا لكم على المجهود الرائع!'
        },
        {
            id: 3,
            name: 'خالد العمري',
            position: 'صاحب مكتب',
            image: image22,
            quote: 'قامت شركة تشطيب بالتقسيط بتجديد مكتبي بشكل كامل، والنتيجة كانت مذهلة. الاهتمام بالتفاصيل والجودة العالية في التنفيذ جعلت المكان يبدو أنيقًا وعصريًا. سأتعامل معهم مرة أخرى بالتأكيد.'
        },
        {
            id: 4,
            name: 'نورة السالم',
            position: 'مالكة شقة فاخرة',
            image: image23,
            quote: 'تعاملت مع العديد من شركات التشطيب  في السابق، لكن تجربتي مع شركة تشطيب بالتقسيط كانت الأفضل على الإطلاق. الاحترافية في العمل والتواصل المستمر جعلت العملية سلسة وممتعة.'
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Handle manual navigation
    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>آراء العملاء</h2>
                    <p>ماذا يقول عملاؤنا عنا</p>
                </div>

                <div className="testimonials-slider">
                    <div className="testimonials-track" style={{ transform: `translateX(${activeIndex * 100}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
                                key={testimonial.id}
                            >
                                <div className="testimonial-content">
                                    <div className="quote-icon">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                    <p className="quote">{testimonial.quote}</p>
                                    <div className="testimonial-author">
                                        <div className="author-image">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        </div>
                                        <div className="author-info">
                                            <h4>{testimonial.name}</h4>
                                            <p>{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonials-dots">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
