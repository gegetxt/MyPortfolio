function Profile({ profile }) {
  return (
    <section className="section profile" id="profile">
      <div className="container">
        <div className="divider" />
        <div className="profile__header">
          <h2 className="section__title">{profile.title}</h2>
        </div>
        <div className="profile__grid">
          <div className="profile__fields">
            <h3 className="profile__section-title">{profile.title}</h3>
            <dl>
              {profile.fields.map((item) => (
                <div className="profile__row" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="profile__about">
            <h3 className="profile__section-title">{profile.aboutTitle}</h3>
            <p className="profile__text">{profile.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
