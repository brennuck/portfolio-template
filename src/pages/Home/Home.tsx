import { Link } from "react-router-dom";
import { siteConfig, experience, projects } from "../../data";
import { PageTransition } from "../../components";
import "./Home.css";

const Home = () => {
    const latestJob = experience[0];
    const latestProjects = projects.slice(0, 3);

    return (
        <section className="home">
            <PageTransition>
                <div className="home__hero">
                    <div className="home__intro">
                        <h1 className="home__title">{siteConfig.headline}</h1>
                        <p className="home__subtitle">{siteConfig.tagline}</p>
                    </div>
                    <p className="home__description">{siteConfig.description}</p>
                </div>

                <div className="home__section">
                    <div className="home__section-header">
                        <h2 className="home__section-title">Experience</h2>
                        <Link to="/about" className="home__section-link">
                            View all →
                        </Link>
                    </div>
                    <div className="home__experience">
                        <div className="home__job">
                            <div className="home__job-header">
                                <span className="home__job-title">{latestJob.title}</span>
                                <span className="home__job-date">
                                    {latestJob.startDate} - {latestJob.endDate}
                                </span>
                            </div>
                            <span className="home__job-company">{latestJob.company}</span>
                            {latestJob.description && <p className="home__job-description">{latestJob.description}</p>}
                        </div>
                    </div>
                </div>

                <div className="home__section">
                    <div className="home__section-header">
                        <h2 className="home__section-title">Projects</h2>
                        <Link to="/projects" className="home__section-link">
                            View all →
                        </Link>
                    </div>
                    <div className="home__projects">
                        {latestProjects.map((project) => (
                            <Link key={project.id} to={`/projects/${project.id}`} className="home__project">
                                <div className="home__project-header">
                                    <h3 className="home__project-title">{project.title}</h3>
                                    {project.year && <span className="home__project-year">{project.year}</span>}
                                </div>
                                <div className="home__project-tags">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="home__project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="home__section home__connect">
                    <h2 className="home__section-title">Let's Connect</h2>
                    <p className="home__connect-text">
                        I'm always interested in hearing about new projects and opportunities. Whether you have a
                        question or just want to say hi, feel free to reach out.
                    </p>
                    <div className="home__connect-links">
                        <Link to="/contact" className="home__connect-link home__connect-link--primary">
                            Get in touch →
                        </Link>
                    </div>
                </div>
            </PageTransition>
        </section>
    );
};

export default Home;
