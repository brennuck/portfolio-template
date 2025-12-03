import { Link } from "react-router-dom";
import { siteConfig } from "../../data";
import "./Home.css";

const Home = () => {
    return (
        <section className="home">
            <div className="home__intro">
                <h1 className="home__title">{siteConfig.headline}</h1>
                <p className="home__subtitle">{siteConfig.tagline}</p>
            </div>
            <div className="home__description">
                <p>{siteConfig.description}</p>
            </div>
            <div className="home__cta">
                <Link to={siteConfig.ctaLink} className="home__link">
                    {siteConfig.ctaText} →
                </Link>
            </div>
        </section>
    );
};

export default Home;
