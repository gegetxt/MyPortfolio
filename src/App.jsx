import { useContext, useMemo } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Profile from './components/Profile.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import { AppContext } from './context/AppContext.jsx'

function App() {
  const { language, theme, content, loading, apiStatus } = useContext(AppContext)

  const data = useMemo(() => content[language], [content, language])

  if (loading) {
    return (
      <div className={`app-shell ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
        <div className="loading">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <div className={`app-shell ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <Header
        navItems={data.header.nav}
        hireLabel={data.header.hire}
        onHireClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      />
      <main>
        <Hero hero={data.hero} />
        <Skills skills={data.skills} />
        <Profile profile={data.profile} />
        <Projects projects={data.projects} />
      </main>
      <Footer footer={data.footer} />
    </div>
  )
}

export default App
