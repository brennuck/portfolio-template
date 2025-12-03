import { Link } from "react-router-dom";
import { siteConfig, projects, projectsIntro } from "../../data";
import { PageTransition } from "../../components";
import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects">
            <PageTransition>
                <h1 className="projects__title">Projects</h1>

                <p className="projects__intro">{projectsIntro}</p>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.id}`}
                            className="projects__item"
                            style={{ "--project-delay": `${index * 0.06}s` } as React.CSSProperties}
                        >
                            <div className="projects__item-header">
                                <h2 className="projects__item-title">
                                    {project.title}
                                </h2>
                                {project.year && (
                                    <span className="projects__item-year">
                                        {project.year}
                                    </span>
                                )}
                            </div>
                            <p className="projects__item-description">
                                {project.description}
                            </p>
                            <div className="projects__item-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="projects__item-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="projects__item-cta">
                                View project →
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="projects__more">
                    <p>
                        Want to see more? Check out my{" "}
                        <a
                            href={siteConfig.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__more-link"
                        >
                            GitHub
                        </a>{" "}
                        or{" "}
                        <Link to="/contact" className="projects__more-link">
                            get in touch
                        </Link>
                        .
                    </p>
                </div>
            </PageTransition>
        </section>
    );
};

export default Projects;

