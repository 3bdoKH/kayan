import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPreview.css';
import { image10, image11, image12, image13, image28, image29 } from '../../utils/imports';
const ProjectPreview = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    // Categories for filtering
    const categories = [
        { id: 'all', name: 'الكل' },
        { id: 'luxury', name: 'فاخر' },
        { id: 'economic', name: 'اقتصادي' },
        { id: 'apartments', name: 'شقق' },
        { id: 'villas', name: 'فيلات' }
    ];

    // Projects data
    const projects = [
        {
            id: 1,
            title: 'تشطيب فيلا فاخرة',
            category: ['luxury', 'villas'],
            image: image10,
            location: 'القاهرة'
        },
        {
            id: 2,
            title: 'تصميم داخلي لشقة',
            category: ['apartments', 'economic'],
            image: image11,
            location: 'الإسكندرية'
        },
        {
            id: 3,
            title: 'تشطيب كامل لفيلا',
            category: ['luxury', 'villas'],
            image: image12,
            location: 'الإسكندرية'
        },
        {
            id: 4,
            title: 'تجديد شقة سكنية',
            category: ['apartments', 'economic'],
            image: image13,
            location: 'الزقازيق'
        },
        {
            id: 5,
            title: 'تصميم وتنفيذ فيلا',
            category: ['luxury', 'villas'],
            image: image28,
            location: 'القاهرة'
        },
        {
            id: 6,
            title: 'تشطيب شقة فاخرة',
            category: ['luxury', 'apartments'],
            image: image29,
            location: 'الجيزة'
        }
    ];

    // Filter projects based on active category
    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category.includes(activeCategory));

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="section-header">
                    <h2>معرض الأعمال</h2>
                    <p>نماذج من مشاريعنا المنفذة</p>
                </div>

                <div className="projects-filter">
                    <ul>
                        {categories.map(category => (
                            <li
                                key={category.id}
                                className={activeCategory === category.id ? 'active' : ''}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <Link to={`/projects/${project.id}`} className="view-project">
                                        <i className="fas fa-eye"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p><i className="fas fa-map-marker-alt"></i> {project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to="/projects" className="btn btn-primary">عرض جميع المشاريع</Link>
            </div>
        </section>
    );
};

export default ProjectPreview;
