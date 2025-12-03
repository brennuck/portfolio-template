import { siteConfig } from "../../data";
import { PageTransition, StatusIndicator } from "../../components";
import "./Contact.css";

const formatPhone = (phone: string): string => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 10) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    if (digits.length === 11 && digits.startsWith("1")) {
        return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    }
    return phone; // Return as-is if not a standard format
};

const Contact = () => {
    return (
        <section className="contact">
            <PageTransition>
                <h1 className="contact__title">Contact</h1>

                <div className="contact__availability">
                    <StatusIndicator showLabel />
                </div>

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

                    {siteConfig.phone && (
                        <a
                            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                            className="contact__method"
                        >
                            <span className="contact__method-label">Phone</span>
                            <span className="contact__method-value">
                                {formatPhone(siteConfig.phone)}
                            </span>
                        </a>
                    )}

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
            </PageTransition>
        </section>
    );
};

export default Contact;
