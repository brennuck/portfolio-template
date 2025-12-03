import { Link } from 'react-router-dom';
import './Work.css';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    description: 'A brief description of the project and what it accomplishes. Built with modern technologies and best practices.',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description: 'Another project showcasing different skills and problem-solving approaches.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    link: 'https://github.com',
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description: 'Creative exploration combining design and development to create something unique.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
  },
];

const Work = () => {
  return (
    <section className="work">
      <h1 className="work__title">Work</h1>
      
      <p className="work__intro">
        A selection of projects I've worked on. Each represents a unique challenge 
        and learning opportunity.
      </p>

      <div className="work__grid">
        {projects.map((project) => (
          <article key={project.id} className="work__project">
            <div className="work__project-header">
              <h2 className="work__project-title">{project.title}</h2>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="work__project-link"
                >
                  View →
                </a>
              )}
            </div>
            <p className="work__project-description">{project.description}</p>
            <div className="work__project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="work__project-tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="work__more">
        <p>
          Want to see more? Check out my{' '}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="work__more-link"
          >
            GitHub
          </a>
          {' '}or{' '}
          <Link to="/contact" className="work__more-link">
            get in touch
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Work;

