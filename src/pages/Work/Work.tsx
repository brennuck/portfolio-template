import { Link } from "react-router-dom";
import { siteConfig, projects, workIntro } from "../../data";
import "./Work.css";

const Work = () => {
    return (
        <section className="work">
            <h1 className="work__title">Work</h1>

            <p className="work__intro">{workIntro}</p>

            <div className="work__grid">
                {projects.map((project) => (
                    <article key={project.id} className="work__project">
                        <div className="work__project-header">
                            <h2 className="work__project-title">
                                {project.title}
                            </h2>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work__project-link"
                                >
                                    View →
                                </a>
                            )}
                        </div>
                        <p className="work__project-description">
                            {project.description}
                        </p>
                        <div className="work__project-tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="work__project-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="work__more">
                <p>
                    Want to see more? Check out my{" "}
                    <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work__more-link"
                    >
                        GitHub
                    </a>{" "}
                    or{" "}
                    <Link to="/contact" className="work__more-link">
                        get in touch
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
};

export default Work;
