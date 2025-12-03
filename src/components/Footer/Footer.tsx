import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__links">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer__link"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer__link"
        >
          LinkedIn
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer__link"
        >
          Twitter
        </a>
      </div>
      <p className="footer__copyright">
        © {currentYear} Brennon Nuckols
      </p>
    </footer>
  );
};

export default Footer;

