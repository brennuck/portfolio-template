import { siteConfig } from "../../data";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__links">
                {siteConfig.social.github && (
                    <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        GitHub
                    </a>
                )}
                {siteConfig.social.linkedin && (
                    <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        LinkedIn
                    </a>
                )}
                {siteConfig.social.twitter && (
                    <a
                        href={siteConfig.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        Twitter
                    </a>
                )}
            </div>
            <p className="footer__copyright">
                © {currentYear} {siteConfig.name}
            </p>
        </footer>
    );
};

export default Footer;
