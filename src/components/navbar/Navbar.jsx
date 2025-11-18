import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../materials/images/logo-2.png'
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="logo" style={{ transform: 'scale(4)', marginRight: '2rem' }} />
                </Link>

                <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="navbar-links">
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/">الرئيسية</Link>
                        </li>
                        <li className={location.pathname === '/services' ? 'active' : ''}>
                            <Link to="/services">خدماتنا</Link>
                        </li>
                        <li className={location.pathname === '/pricing' ? 'active' : ''}>
                            <Link to="/pricing">الأسعار</Link>
                        </li>
                        {/* <li className={location.pathname === '/offers' ? 'active' : ''}>
                            <Link to="/offers">العروض</Link>
                        </li> */}
                        <li className={location.pathname === '/projects' ? 'active' : ''}>
                            <Link to="/projects">معرض الأعمال</Link>
                        </li>
                        <li className={location.pathname === '/about' ? 'active' : ''}>
                            <Link to="/about">من نحن</Link>
                        </li>
                        <li className={location.pathname === '/contact' ? 'active' : ''}>
                            <Link to="/contact">تواصل معنا</Link>
                        </li>
                    </ul>
                </div>

                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
