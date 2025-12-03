import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        BN
      </NavLink>
      <nav className="header__nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          About
        </NavLink>
        <NavLink 
          to="/work" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Work
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

