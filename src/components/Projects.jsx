import workintechImage from '../assets/my-portfolio.png'
import randomjokesImage from '../assets/pizza.png'
import journeyImage from '../assets/pizza-challenge.png'

function Projects({ projects }) {
  const projectImages = {
    'my-portfolio.png': workintechImage,
    'pizza.png': randomjokesImage,
    'pizza-challenge.png': journeyImage,
  }
  
  const getImageUrl = (imageName) => {
    return projectImages[imageName] || workintechImage
  }

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="divider" />
        <h2 className="section__title">{projects.title}</h2>
        <div className="projects__grid">
          {projects.list.map((project) => (
            <article className="card project-card" key={project.name}>
              <img 
                src={getImageUrl(project.image)} 
                alt={project.name} 
                className="project-card__image" 
              />
              <h3 className="project-card__title">{project.name}</h3>
              <p className="project-card__text">{project.description}</p>
              <div className="pill-row">
                {project.tech.map((t, idx) => (
                  <span className="pill" key={`${project.name}-${t}-${idx}`}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                <a href={project.links.github} className="link">
                  Github
                </a>
                <a href={project.links.live} className="link">
                  View Site
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
