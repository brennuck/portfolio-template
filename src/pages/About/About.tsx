import './About.css';

const About = () => {
  return (
    <section className="about">
      <h1 className="about__title">About</h1>
      
      <div className="about__content">
        <p>
          I'm a software engineer with a passion for building elegant, 
          user-focused products. I believe in writing clean, maintainable 
          code and creating experiences that feel natural and intuitive.
        </p>
        
        <p>
          With a background in full-stack development, I enjoy working across 
          the entire product lifecycle — from initial concept to polished 
          implementation. I'm particularly drawn to projects that challenge 
          conventional thinking and push creative boundaries.
        </p>

        <p>
          When I'm not coding, you'll find me exploring new technologies, 
          contributing to open source, or searching for the perfect cup of coffee.
        </p>
      </div>

      <div className="about__section">
        <h2 className="about__section-title">Skills</h2>
        <div className="about__skills">
          <span className="about__skill">TypeScript</span>
          <span className="about__skill">React</span>
          <span className="about__skill">Node.js</span>
          <span className="about__skill">Python</span>
          <span className="about__skill">PostgreSQL</span>
          <span className="about__skill">AWS</span>
        </div>
      </div>

      <div className="about__section">
        <h2 className="about__section-title">Experience</h2>
        <div className="about__experience">
          <div className="about__job">
            <div className="about__job-header">
              <span className="about__job-title">Senior Software Engineer</span>
              <span className="about__job-date">2022 - Present</span>
            </div>
            <span className="about__job-company">Company Name</span>
          </div>
          <div className="about__job">
            <div className="about__job-header">
              <span className="about__job-title">Software Engineer</span>
              <span className="about__job-date">2020 - 2022</span>
            </div>
            <span className="about__job-company">Previous Company</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

