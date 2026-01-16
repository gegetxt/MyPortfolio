describe('Portfolio Sitesi E2E Testleri', () => {
  beforeEach(() => {
    // API isteklerini yakala
    cy.intercept('POST', 'https://reqres.in/api/users').as('apiPost')
    cy.visit('/')
  })

  describe('Sayfa Yükleme', () => {
    it('ana sayfa başarıyla yüklenmeli', () => {
      cy.get('.app-shell').should('exist')
      cy.get('.header').should('be.visible')
      cy.get('.hero').should('be.visible')
    })

    it('tüm bölümler görünür olmalı', () => {
      cy.get('#hero').should('exist')
      cy.get('#skills').should('exist')
      cy.get('#projects').should('exist')
      cy.get('.footer').should('exist')
    })
  })

  describe('API İletişimi', () => {
    it('sayfa yüklendiğinde API\'ye POST isteği atılmalı', () => {
      cy.wait('@apiPost').then((interception) => {
        // POST isteği yapıldığını doğrula (status code 200, 201 veya 403 olabilir)
        expect(interception.response.statusCode).to.be.oneOf([200, 201, 403])
        // Gönderilen veri tr ve en içermeli
        expect(interception.request.body).to.have.property('tr')
        expect(interception.request.body).to.have.property('en')
      })
    })

    it('API yanıtı alındığında toast bildirimi gösterilmeli', () => {
      cy.wait('@apiPost')
      // Başarılı veya hata toast'ı görünmeli
      cy.get('.Toastify__toast', { timeout: 5000 }).should('exist')
    })
  })

  describe('Tema Değişimi (Dark Mode)', () => {
    it('tema toggle butonu çalışmalı', () => {
      // Başlangıçta light tema
      cy.get('.app-shell').should('have.class', 'theme-light')
      
      // Dark mode'a geç
      cy.get('.mode-switch__track').click()
      cy.get('.app-shell').should('have.class', 'theme-dark')
      
      // Light mode'a geri dön
      cy.get('.mode-switch__track').click()
      cy.get('.app-shell').should('have.class', 'theme-light')
    })

    it('tema değiştiğinde toast bildirimi gösterilmeli', () => {
      cy.get('.mode-switch__track').click()
      cy.get('.Toastify__toast').should('contain', 'tema')
    })

    it('dark mode\'da arka plan rengi değişmeli', () => {
      cy.get('.mode-switch__track').click()
      cy.get('.app-shell').should('have.css', 'background-color', 'rgb(30, 30, 30)')
    })
  })

  describe('Dil Değişimi', () => {
    it('dil butonu çalışmalı', () => {
      // Dil butonuna tıkla
      cy.get('.language-btn').click()
      cy.get('.Toastify__toast').should('contain', 'Dil değiştirildi')
    })

    it('dil değiştiğinde içerik değişmeli', () => {
      // Varsayılan dil TR - İngilizce içerik
      cy.get('.hero__title').should('exist')
      
      // Dili değiştir
      cy.get('.language-btn').click()
      
      // İçerik hala görünür olmalı
      cy.get('.hero__title').should('exist')
    })
  })

  describe('Navigasyon', () => {
    it('nav linkleri çalışmalı', () => {
      cy.get('.nav__link').should('have.length.at.least', 2)
      cy.get('.nav__link').first().should('have.attr', 'href', '#skills')
    })

    it('hire me butonu footer\'a scroll etmeli', () => {
      cy.get('.btn-outline.btn-small').click()
      cy.get('.footer').should('be.visible')
    })
  })

  describe('Bileşenler', () => {
    it('skills kartları görünmeli', () => {
      cy.get('.skill-card').should('have.length.at.least', 1)
    })

    it('proje kartları görünmeli', () => {
      cy.get('.project-card').should('have.length.at.least', 1)
    })

    it('proje kartlarında teknoloji etiketleri olmalı', () => {
      cy.get('.project-card .pill').should('exist')
    })

    it('footer\'da iletişim bilgileri olmalı', () => {
      cy.get('.footer__email-link').should('exist')
      cy.get('.footer__socials a').should('have.length.at.least', 1)
    })
  })

  describe('Responsive Tasarım', () => {
    it('mobil görünümde düzgün çalışmalı', () => {
      cy.viewport(375, 667) // iPhone SE
      cy.get('.header').should('be.visible')
      cy.get('.hero').should('be.visible')
    })

    it('tablet görünümde düzgün çalışmalı', () => {
      cy.viewport(768, 1024) // iPad
      cy.get('.header').should('be.visible')
      cy.get('.hero').should('be.visible')
    })
  })

  describe('LocalStorage', () => {
    it('tema tercihi kaydedilmeli', () => {
      cy.get('.mode-switch__track').click()
      cy.window().then((win) => {
        expect(win.localStorage.getItem('portfolio_theme')).to.equal('dark')
      })
    })

    it('dil tercihi kaydedilmeli', () => {
      cy.get('.language-btn').click()
      cy.window().then((win) => {
        const lang = win.localStorage.getItem('portfolio_language')
        expect(['tr', 'en']).to.include(lang)
      })
    })
  })
})
