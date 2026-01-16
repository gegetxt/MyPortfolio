function Footer({ footer }) {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <h3 className="footer__headline">
          {footer.headline.split('your next').map((part, i) => 
            i === 0 ? part : <span key={i}><br />your next{part}</span>
          )}
        </h3>
        <div className="footer__links">
          <div className="footer__email">
            <span role="img" aria-label="point">
              👉
            </span>
            <a href={`mailto:${footer.email}`} className="footer__email-link">
              {footer.email}
            </a>
          </div>
          <div className="footer__socials">
            {footer.socials.map((item) => (
              <a key={item.label} href={item.href} className="link">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
