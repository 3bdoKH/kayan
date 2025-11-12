import React from 'react';
import './RelatedKeywords.css';

const RelatedKeywords = () => {
    const keywords = [
        "تطشيب بالتقسيط",
        "تشطيب شقق",
        "تشطيب ڤيلات",
        "تجديد شقق",
        "تجديد ڤيلات",
        "تجديد المطبخ",
        "تجديد الحمام",
        "تشطيب شقق بالتقسيط",
        "شركات تشطيب",
        "شركات تشطيب بالتقسيط",
        "تشطيب بالتقسيط المباشر",
        "شركات تشطيب في القاهره",
        "الخدمات الكهربائية",
        "خدمات السباكة",
        "شركات تشطيب في اسكندريه",
        "شركات تشطيب في المعادي",
        "شركات تشطيب في المقطم",
        "تشطيبات بالتقسيط",
        "شركات تشطيب في التجمع الخامس",
        "شركات تشطيب في القاهره الجديده",
        "شركات تشطيب في مدينتي",
        "شركات تشطيب في جسر السويس",
        "شركات تشطيب في العبور",
        "شركات تشطيب في الشروق"
    ];

    return (
        <section className="related-keywords-section">
            <div className="container">
                <h2>المواضيع ذات الصلة</h2>
                <div className="keywords-container">
                    {keywords.map((keyword, index) => (
                        <div className="keyword-tag" key={index}>
                            {keyword}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedKeywords;
