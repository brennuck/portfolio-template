import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home__intro">
        <h1 className="home__title">
          Brennon Nuckols
        </h1>
        <p className="home__subtitle">
          Software Engineer
        </p>
      </div>
      <div className="home__description">
        <p>
          Building thoughtful digital experiences with clean code and minimal design. 
          Currently focused on web development and creative technology.
        </p>
      </div>
      <div className="home__cta">
        <a href="/work" className="home__link">
          View my work →
        </a>
      </div>
    </section>
  );
};

export default Home;

