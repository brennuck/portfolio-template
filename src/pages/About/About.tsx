import { siteConfig, skills, experience } from "../../data";
import "./About.css";

const About = () => {
    return (
        <section className="about">
            <h1 className="about__title">About</h1>

            <div className="about__content">
                {siteConfig.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="about__section">
                <h2 className="about__section-title">Skills</h2>
                <div className="about__skills">
                    {skills.map((skill) => (
                        <span key={skill} className="about__skill">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="about__section">
                <h2 className="about__section-title">Experience</h2>
                <div className="about__experience">
                    {experience.map((job) => (
                        <div key={job.id} className="about__job">
                            <div className="about__job-header">
                                <span className="about__job-title">
                                    {job.title}
                                </span>
                                <span className="about__job-date">
                                    {job.startDate} - {job.endDate}
                                </span>
                            </div>
                            <span className="about__job-company">
                                {job.company}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
