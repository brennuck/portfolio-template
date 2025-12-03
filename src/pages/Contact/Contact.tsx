import { siteConfig } from "../../data";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <h1 className="contact__title">Contact</h1>

            <div className="contact__content">
                {siteConfig.contactIntro.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="contact__methods">
                <a
                    href={`mailto:${siteConfig.email}`}
                    className="contact__method"
                >
                    <span className="contact__method-label">Email</span>
                    <span className="contact__method-value">
                        {siteConfig.email}
                    </span>
                </a>

                {siteConfig.social.linkedin && (
                    <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__method"
                    >
                        <span className="contact__method-label">LinkedIn</span>
                        <span className="contact__method-value">
                            Connect with me →
                        </span>
                    </a>
                )}

                {siteConfig.social.twitter && (
                    <a
                        href={siteConfig.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__method"
                    >
                        <span className="contact__method-label">Twitter</span>
                        <span className="contact__method-value">
                            Follow me →
                        </span>
                    </a>
                )}
            </div>

            {siteConfig.availabilityStatus && (
                <div className="contact__availability">
                    <span className="contact__status"></span>
                    <span className="contact__status-text">
                        {siteConfig.availability}
                    </span>
                </div>
            )}
        </section>
    );
};

export default Contact;
