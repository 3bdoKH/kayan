import React from 'react';
import './AboutUs.css';
import { video1 } from '../../utils/imports';

const AboutUs = () => {
  const stats = [
    { number: '15+', label: 'سنوات خبرة', icon: 'fas fa-calendar-alt' },
    { number: '500+', label: 'مشروع منفذ', icon: 'fas fa-project-diagram' },
    { number: '500+', label: 'عميل سعيد', icon: 'fas fa-smile' },
    { number: '50+', label: 'فني محترف', icon: 'fas fa-users' }
  ];

  const values = [
    {
      icon: 'fas fa-gem',
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في كافة مراحل العمل',
      color: '#667eea'
    },
    {
      icon: 'fas fa-clock',
      title: 'الالتزام',
      description: 'نحترم المواعيد ونلتزم بتسليم المشاريع في الوقت المحدد',
      color: '#764ba2'
    },
    {
      icon: 'fas fa-handshake',
      title: 'الشفافية',
      description: 'نتعامل بشفافية كاملة مع عملائنا في كافة مراحل المشروع',
      color: '#f093fb'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'الابتكار',
      description: 'نسعى دائمًا لتقديم حلول مبتكرة تناسب احتياجات كل عميل',
      color: '#4facfe'
    }
  ];

  const process = [
    { icon: 'fas fa-comments', title: 'الاستشارة الأولية', description: 'نستمع لاحتياجاتك ونفهم متطلباتك بدقة' },
    { icon: 'fas fa-pencil-ruler', title: 'التصميم', description: 'نقدم تصورات وتصاميم تناسب ذوقك وميزانيتك' },
    { icon: 'fas fa-tasks', title: 'التخطيط', description: 'نضع خطة عمل تفصيلية مع جدول زمني دقيق' },
    { icon: 'fas fa-hammer', title: 'التنفيذ', description: 'ننفذ المشروع وفق أعلى معايير الجودة' },
    { icon: 'fas fa-check-circle', title: 'التسليم', description: 'نسلم المشروع مع ضمان الجودة وخدمات ما بعد التنفيذ' }
  ];

  return (
    <div className="about-page">
      {/* Hero Header */}
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">
              <i className="fas fa-building"></i>
              منذ 2009
            </span>
            <h1>من نحن</h1>
            <p>رواد التميز في عالم التشطيبات والديكورات الداخلية</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">رحلتنا</span>
            <h2>قصتنا</h2>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p className="large-text">
                تأسست شركتنا منذ أكثر من <strong>15 عامًا</strong> بهدف تقديم خدمات تشطيب عالية الجودة بأسعار منافسة.
              </p>
              <p>
                نفتخر بتنفيذ أكثر من <strong>500 مشروع ناجح</strong> في مختلف أنحاء جمهورية مصر العربية.
                نسعى دائمًا لتقديم أفضل الحلول التي تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
              </p>
              <p>
                من خلال فريق عمل محترف وخبرة طويلة في المجال، نقدم خدمات متكاملة تشمل التصميم الداخلي،
                التشطيبات الكاملة، والديكورات الفاخرة.
              </p>
            </div>
            <div className="story-vision">
              <div className="vision-card">
                <div className="vision-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>رؤيتنا</h3>
                <p>
                  نسعى لأن نكون الخيار الأول في مجال التشطيبات والديكورات الداخلية، من خلال تقديم خدمات متكاملة
                  تجمع بين الجودة العالية والتصميم المبتكر والتنفيذ الاحترافي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">مبادئنا</span>
            <h2>قيمنا</h2>
            <p>القيم التي نلتزم بها في كل مشروع</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index} style={{ '--value-color': value.color }}>
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">خبراء محترفون</span>
            <h2>فريقنا</h2>
          </div>
          <div className="team-content">
            <div className="team-info">
              <p>
                يضم فريقنا نخبة من <strong>المهندسين والمصممين والفنيين</strong> ذوي الخبرة الواسعة في مجال
                التشطيبات والديكورات الداخلية.
              </p>
              <p>
                يعمل فريقنا بروح الفريق الواحد لتقديم أفضل النتائج وتحقيق رضا العملاء. كل عضو في فريقنا
                متخصص في مجاله ويساهم بخبرته لإنجاح كل مشروع.
              </p>
              <div className="team-features">
                <div className="team-feature">
                  <i className="fas fa-user-tie"></i>
                  <span>مهندسون معتمدون</span>
                </div>
                <div className="team-feature">
                  <i className="fas fa-palette"></i>
                  <span>مصممون محترفون</span>
                </div>
                <div className="team-feature">
                  <i className="fas fa-hard-hat"></i>
                  <span>فنيون مهرة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">خطوات العمل</span>
            <h2>كيف نعمل</h2>
            <p>منهجية عمل احترافية لضمان أفضل النتائج</p>
          </div>
          <div className="process-timeline">
            {process.map((step, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-number">{index + 1}</div>
                <div className="timeline-icon">
                  <i className={step.icon}></i>
                </div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">شاهد عملنا</span>
            <h2>شاهد كيف نعمل</h2>
            <p>جولة سريعة في أحد مشاريعنا</p>
          </div>
          <div className="video-wrapper">
            <div className="video-container">
              <video controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta">
            <div className="cta-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h2>هل أنت مستعد لبدء مشروعك؟</h2>
            <p>تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر تفصيلي لمشروعك</p>
            <a href="/contact" className="cta-btn">
              <span>تواصل معنا</span>
              <i className="fas fa-arrow-left"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
