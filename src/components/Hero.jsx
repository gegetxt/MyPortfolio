import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profileImage from '../assets/profile-image.png'

function Hero({ hero }) {
  const profileImageUrl = profileImage

  return (
    <section className="hero" id="hero">
      <div className="container hero__content">
        <div className="hero__left">
          <div className="eyebrow">
            <div className="eyebrow__line" />
            <span className="eyebrow__label">{hero.name}</span>
          </div>
          <h1 className="hero__title">
            <span className="hero__role">{hero.role}</span>
            <br />
            <span className="hero__accent">{hero.accent}</span>
          </h1>
          <p className="hero__text">{hero.title}</p>
          <div className="button-group">
            <button className="btn btn-primary">{hero.buttons.primary}</button>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline icon-btn">
              <FaGithub size={20} />
              {hero.buttons.github}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline icon-btn">
              <FaLinkedin size={20} />
              {hero.buttons.linkedin}
            </a>
          </div>
        </div>
        <div className="hero__right">
          <img src={profileImageUrl} alt={hero.name} className="hero__image" />
        </div>
      </div>
    </section>
  )
}

export default Hero
