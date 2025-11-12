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
