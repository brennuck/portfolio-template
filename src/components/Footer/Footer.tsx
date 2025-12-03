import { siteConfig } from "../../data";
import DotClock from "../DotClock";
import "./Footer.css";

const Footer = () => {
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
            </div>
            <DotClock />
        </footer>
    );
};

export default Footer;
