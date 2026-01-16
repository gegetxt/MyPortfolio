import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Header({ navItems, hireLabel, onHireClick }) {
  const { theme, toggleTheme, language, setLanguage } = useContext(AppContext)

  const nextLanguage = language === 'tr' ? 'en' : 'tr'

  return (
    <header className="header">
      <div className="container header__content">
        <div className="logo">
          <div className="logo__circle">
            <span className="logo__letter">A</span>
          </div>
        </div>

        <div className="header__right">
          <div className="mode-switch" role="switch" aria-checked={theme === 'dark'}>
            <button className="mode-switch__track" onClick={toggleTheme}>
              <span className="mode-switch__thumb" />
            </button>
            <span className="mode-switch__text">{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
            <button className="language-btn" onClick={() => setLanguage(nextLanguage)} aria-label="Dil değiştir">
              {nextLanguage === 'tr' ? (
                <>
                  <span className="lang-main">TÜRKÇE</span>
                  <span className="lang-suffix">'YE GEÇ</span>
                </>
              ) : (
                <>
                  <span className="lang-main">SWITCH</span>
                  <span className="lang-suffix"> TO EN</span>
                </>
              )}
            </button>
          </div>

          <div className="header__navrow">
            <nav className="nav">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav__link">
                  {item.label}
                </a>
              ))}
            </nav>
            <button className="btn btn-outline btn-small" onClick={onHireClick}>
              {hireLabel}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
