import { createContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { fetchContent } from '../services/api'
import localContent from '../data/content'

const STORAGE_KEYS = {
  theme: 'portfolio_theme',
  language: 'portfolio_language',
}

const prefersDark = () =>
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

export const AppContext = createContext()

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.theme)
    if (saved === 'light' || saved === 'dark') return saved
    return prefersDark() ? 'dark' : 'light'
  })

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.language)
    return saved === 'en' ? 'en' : 'tr'
  })

  const [content, setContent] = useState(localContent)
  const [loading, setLoading] = useState(true)
  const [apiStatus, setApiStatus] = useState(null)

  // Uygulama başladığında API'ye POST isteği at
  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        const data = await fetchContent()
        // reqres.in yanıtından veriyi al (POST edilen veri döner)
        if (data.tr && data.en) {
          setContent(data)
          setApiStatus('success')
        } else if (data.data) {
          // reqres.in formatında dönen veri
          setContent(data.data)
          setApiStatus('success')
        } else {
          setContent(localContent)
          setApiStatus('success')
        }
      } catch (error) {
        console.error('API hatası:', error)
        setContent(localContent)
        setApiStatus('error')
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark')
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
    localStorage.setItem(STORAGE_KEYS.theme, theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.language, language)
  }, [language])

  const handleToggleTheme = () => {
    setTheme((t) => {
      const newTheme = t === 'dark' ? 'light' : 'dark'
      toast.info(`🎨 ${newTheme === 'dark' ? 'Karanlık' : 'Aydınlık'} tema aktif`, { 
        autoClose: 1500,
        toastId: 'theme-toast' // Duplicate önleme
      })
      return newTheme
    })
  }

  const handleSetLanguage = (lang) => {
    setLanguage(lang)
    toast.info(`🌐 Dil değiştirildi: ${lang === 'tr' ? 'Türkçe' : 'English'}`, { 
      autoClose: 1500,
      toastId: 'language-toast' // Duplicate önleme
    })
  }

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: handleToggleTheme,
      language,
      setLanguage: handleSetLanguage,
      content,
      loading,
      apiStatus,
    }),
    [theme, language, content, loading, apiStatus]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
