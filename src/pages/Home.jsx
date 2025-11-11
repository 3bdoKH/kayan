import React, { useEffect } from 'react';
import './Home.css';

// Import components
import Hero from '../components/hero/Hero';
import AboutSection from '../components/aboutsection/AboutSection';
import ServicesSection from '../components/servicessection/ServicesSection';
import ProjectPreview from '../components/projectpreview/ProjectPreview';
import PricingSection from '../components/pricingsection/PricingSection';
import Testimonials from '../components/testimonials/Testimonials';
import ContactSection from '../components/contactsection/ContactSection';
import RelatedKeywords from '../components/relatedkeywords/RelatedKeywords';

const Home = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            <Hero />
            <PricingSection />
            <AboutSection />
            <ServicesSection />
            <ProjectPreview />
            <Testimonials />
            <ContactSection />
            <RelatedKeywords />
        </div>
    );
};

export default Home;
