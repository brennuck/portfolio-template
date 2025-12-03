import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" className="header__logo">
                BN
            </NavLink>
            <div className="header__right">
                <nav className="header__nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/work"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Work
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Contact
                    </NavLink>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
