import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPreview.css';
import { preview1, preview2, preview3, preview4, preview5, image19 } from '../../utils/imports';
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
            image: preview1,
            location: 'التجمع الخامس'
        },
        {
            id: 2,
            title: 'تصميم داخلي لشقة',
            category: ['apartments', 'economic'],
            image: preview2,
            location: 'الشيخ زايد'
        },
        {
            id: 3,
            title: 'تشطيب كامل لفيلا',
            category: ['luxury', 'villas'],
            image: preview3,
            location: 'الإسكندرية'
        },
        {
            id: 4,
            title: 'تجديد شقة سكنية',
            category: ['apartments', 'economic'],
            image: preview4,
            location: 'الشروق'
        },
        {
            id: 5,
            title: 'تصميم وتنفيذ فيلا',
            category: ['luxury', 'villas'],
            image: preview5,
            location: 'المقطم'
        },
        {
            id: 6,
            title: 'تشطيب شقة فاخرة',
            category: ['luxury', 'apartments'],
            image: image19,
            location: 'التجمع الاول'
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
