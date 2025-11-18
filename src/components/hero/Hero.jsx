import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import hero from '../../materials/images/hero.jpg'

const Hero = () => {

    return (
        <section className="hero">
            <div className="hero-media">
                <div className={`hero-image`}
                    style={{ backgroundImage: `url(${hero})` }}
                ></div>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1>كيان</h1>
                <p>كيان للتشطيبات والديكورات والمقاولات العموميه</p>

                <div className="hero-warranty">
                    <div className="warranty-badge">
                        <svg className="warranty-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <polyline points="9 12 11 14 15 10"></polyline>
                        </svg>
                        <span className="warranty-text">ضمان شامل على جميع الأعمال</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <Link to="/services" className="btn btn-primary">اعرف أكثر</Link>
                    <Link to="/pricing" className="btn btn-secondary">اعرض الأسعار</Link>
                </div>
            </div>

            <div className="hero-scroll-indicator">
            </div>
        </section >
    );
};

export default Hero;
