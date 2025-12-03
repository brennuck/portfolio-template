import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact__title">Contact</h1>
      
      <div className="contact__content">
        <p>
          I'm always open to discussing new projects, creative ideas, 
          or opportunities to be part of something great.
        </p>
        
        <p>
          Feel free to reach out — I'd love to hear from you.
        </p>
      </div>

      <div className="contact__methods">
        <a 
          href="mailto:hello@bnuckols.com" 
          className="contact__method"
        >
          <span className="contact__method-label">Email</span>
          <span className="contact__method-value">hello@bnuckols.com</span>
        </a>
        
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact__method"
        >
          <span className="contact__method-label">LinkedIn</span>
          <span className="contact__method-value">Connect with me →</span>
        </a>
        
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact__method"
        >
          <span className="contact__method-label">Twitter</span>
          <span className="contact__method-value">@bnuckols →</span>
        </a>
      </div>

      <div className="contact__availability">
        <span className="contact__status"></span>
        <span className="contact__status-text">Currently available for freelance work</span>
      </div>
    </section>
  );
};

export default Contact;

