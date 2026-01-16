function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{skills.title}</h2>
        </div>
        <div className="skills-grid">
          {skills.list.map((skill) => (
            <article className="card skill-card" key={skill.name}>
              <h3 className="skill-card__title">{skill.name}</h3>
              <p className="skill-card__text">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
