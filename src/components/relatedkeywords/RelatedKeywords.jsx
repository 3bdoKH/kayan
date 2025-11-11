import React from 'react';
import './RelatedKeywords.css';

const RelatedKeywords = () => {
    // Sample keywords related to construction and home improvement in Arabic
    const keywords = [
        "تجديد المنازل",
        "خدمات البناء",
        "التصميم الداخلي",
        "مقاولي البناء",
        "إعادة تصميم المنزل",
        "تجديد المطبخ",
        "تجديد الحمام",
        "بناء منزل مخصص",
        "التصميم المعماري",
        "إضافات للمنزل",
        "خدمات الدهان",
        "تركيب الأرضيات",
        "الخدمات الكهربائية",
        "خدمات السباكة",
        "حلول الأسقف",
        "تنسيق الحدائق",
        "تركيب المنزل الذكي",
        "البناء المستدام",
        "صيانة المنزل",
        "مواد البناء"
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
