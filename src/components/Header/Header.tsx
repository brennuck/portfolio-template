import { NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../../data";
import ThemeToggle from "../ThemeToggle";
import StatusIndicator from "../StatusIndicator";
import "./Header.css";

const Header = () => {
    const location = useLocation();
    const isContactPage = location.pathname === "/contact";

    return (
        <header className="header">
            <div className="header__left">
                <NavLink to="/" className="header__logo">
                    {siteConfig.logo ? (
                        <img src={siteConfig.logo} alt={siteConfig.name} className="header__logo-img" />
                    ) : (
                        siteConfig.initials
                    )}
                </NavLink>
                {!isContactPage && <StatusIndicator />}
            </div>
            <div className="header__right">
                <nav className="header__nav">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} end>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        About
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Contact
                    </NavLink>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
