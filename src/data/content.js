const content = {
  tr: {
    header: {
      nav: [
        { label: 'Yetenekler', href: '#skills' },
        { label: 'Projeler', href: '#projects' },
      ],
      hire: 'Beni işe al',
      languageCTA: "TÜRKÇE'YE GEÇ",
    },
    hero: {
name: 'Gizem Gündüz',
role: 'Minimalizm Aşığı',
accent: 'Yaratıcı Düşünür',
title:
"Merhaba, ben Gizem. Full-stack geliştiriciyim. Güçlü ve ölçeklenebilir, kullanıcı deneyimi odaklı frontend ürünler geliştiren bir geliştirici arıyorsanız, gelin tanışalım.",
      profileImage: 'profile-image.jpg',
      buttons: {
        primary: 'Beni işe al',
        github: 'Github',
        linkedin: 'Linkedin',
      },
    },
    skills: {
      title: 'Yetenekler',
      list: [
        {
          name: 'Java Script',
          description:
            'Modern JavaScript (ES6+) kullanarak etkileşimli, performanslı ve sürdürülebilir web uygulamaları geliştiriyorum. API entegrasyonları, state yönetimi ve component tabanlı mimariler konusunda deneyimliyim.',
        },
        {
          name: 'React.Js',
          description:
            'React ile component tabanlı, yeniden kullanılabilir ve ölçeklenebilir arayüzler geliştiriyorum. Context API, Redux, React Router ve modern hook yapılarıyla projeler üretiyorum.',
        },
        {
          name: 'Node.Js',
          description:
            'Node.js ile RESTful API’ler geliştiriyor, frontend uygulamalar için backend servisleri oluşturuyorum. Express, JWT, veritabanı bağlantıları ve temel authentication süreçlerinde deneyimliyim.',
        },
      ],
    },
    profile: {
      title: 'Profil',
      heading: 'Profil',
      fields: [
  { label: 'Doğum Tarihi', value: '19.05.2000' },
  { label: 'Şehir', value: 'Antalya / Ankara' },
  { label: 'Eğitim', value: 'Atılım Üniversitesi, Yazılım Mühendisliği (2025)' },
  { label: 'Tercih Edilen Roller', value: 'Frontend Developer / Full-Stack Developer' },
],
      aboutTitle: 'Hakkımda',
      aboutText:
        '2025 yılında Yazılım Mühendisliği bölümünden mezun oldum. Mezuniyetimden sonra Workintech Full-Stack Development Programı’na katılarak modern web teknolojileri üzerine yoğunlaştım. Özellikle frontend geliştirme alanında, kullanıcı odaklı, performanslı ve sürdürülebilir arayüzler geliştirmeyi seviyorum. React, JavaScript ve modern UI kütüphaneleri ile projeler üretiyor, aynı zamanda backend tarafında Node.js ve .NET Core ile kendimi geliştiriyorum. Amacım; gerçek problemlere çözüm üreten, ölçeklenebilir ve kaliteli yazılımlar geliştiren güçlü bir software engineer olmak.',
    },
    projects: {
      title: 'Projeler',
      list: [
        {
          name: 'My Portfolio',
          description:
            'Kişisel portföy web sitem. Projelerimi, yeteneklerimi ve iletişim bilgilerimi sergilemek için geliştirdim. Modern ve responsive bir arayüz ile tasarlandı.',
          tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
          links: {
            github: 'https://github.com/gegetxt/MyPortfolio',
            live: 'https://my-portfolio-lime-ten-70.vercel.app/',
          },
          image: 'my-portfolio.png',
        },
        {
          name: 'Pizza',
          description:
            'Kullanıcıların pizza siparişi oluşturabildiği, ürün seçimi ve sepet yönetimi içeren bir frontend uygulaması. Component yapısı ve state yönetimi üzerine odaklanılmıştır.',
          tech: ['React', 'Context API', 'JavaScript', 'CSS'],
          links: {
            github: 'https://github.com/gegetxt/pizza',
            live: 'https://pizza-phi-eight.vercel.app/',
          },
          image: 'pizza.png',
        },
        {
          name: 'Pizza Challenge',
          description:
            'Workintech sürecinde geliştirdiğim challenge projesi. Form yönetimi, validasyon, component mimarisi ve kullanıcı etkileşimleri üzerine kuruludur.',
          tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
          links: {
            github: 'https://github.com/gegetxt/fsweb-s8-challenge-pizza',
            live: 'https://fsweb-s8-challenge-pizza-smoky.vercel.app/',
          },
          image: 'pizza-challenge.png',
        },
      ],
    },
    footer: {
      headline: "Birlikte bir sonraki işiniz üzerinde çalışalım.",
      email: 'gizemgunduz77@gmail.com',
      socials: [
        { label: 'Kişisel Blog', href: '#' },
        { label: 'Github', href: 'https://github.com/gegetxt' },
        { label: 'Linkedin', href: 'http://www.linkedin.com/in/gizem-g-4b48a1245' },
      ],
    },
  },
  en: {
    header: {
      nav: [
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
      ],
      hire: 'Hire me',
      languageCTA: 'SWITCH TO ENG',
    },
    hero: {
      name: 'Gizem Gündüz',
      role: 'Creative thinker',
      accent: 'Minimalism lover',
      title:
        "Hi, I'm Gizem. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
      profileImage: 'profile-image.jpg',
      buttons: {
        primary: 'Hire me',
        github: 'Github',
        linkedin: 'Linkedin',
      },
    },
    skills: {
      title: 'Skills',
      list: [
        {
          name: 'Java Script',
          description:
            'I develop interactive, high-performance, and maintainable web applications using modern JavaScript (ES6+). I have experience with API integrations, state management, and component-based architectures.',
        },
        {
          name: 'React.Js',
          description:
            'I build scalable and reusable user interfaces with React. I develop projects using modern React concepts such as Hooks, Context API, Redux, and React Router.',
        },
        {
          name: 'Node.Js',
          description:
            'I develop RESTful APIs with Node.js and build backend services to support frontend applications. I have experience with Express, JWT, database connections, and basic authentication flows.',
        },
      ],
    },
    profile: {
      title: 'Profile',
      heading: 'Profile',
     fields: [
  { label: 'Birthday', value: '19.05.2000' },
  { label: 'City', value: 'Antalya / Ankara' },
  { label: 'Education', value: 'Atılım University, BSc in Software Engineering (2025)' },
  { label: 'Preferred Role', value: 'Frontend Developer / Full-Stack Developer' },
],
      aboutTitle: 'About Me',
      aboutText:
        'I graduated with a degree in Software Engineering in 2025. After graduation, I joined the Workintech Full-Stack Development Program, where I focused on modern web technologies. I am especially passionate about frontend development and enjoy building user-centered, high-performance, and maintainable interfaces. I actively develop projects using React and JavaScript, while also improving my backend skills with Node.js and .NET Core. My goal is to become a strong software engineer who builds scalable applications that solve real-world problems.',
    },
    projects: {
      title: 'Projects',
      list: [
        {
          name: 'My Portfolio',
          description:
  'My personal portfolio website where I showcase my projects, technical skills, and contact information. Designed with a modern, responsive, and clean user interface.',
tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
          links: {
            github: 'https://github.com/gegetxt/MyPortfolio',
            live: 'https://my-portfolio-lime-ten-70.vercel.app/',
          },
          image: 'my-portfolio.png',
        },
        {
          name: 'Pizza',
          description:
  'A frontend application where users can create pizza orders with product selection and cart management features. Focused on component architecture and state management.',
tech: ['React', 'Context API', 'JavaScript', 'CSS'],
          links: {
            github: 'https://github.com/gegetxt/pizza',
            live: 'https://pizza-phi-eight.vercel.app/',
          },
          image: 'pizza.png',
        },
        {
          name: 'Pizza Challenge',
          description:
  'A challenge project developed during the Workintech program. Built around form management, validation, component structure, and interactive user experiences.',
tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
          links: {
            github: 'https://github.com/gegetxt/fsweb-s8-challenge-pizza',
            live: 'https://fsweb-s8-challenge-pizza-smoky.vercel.app/',
          },
          image: 'pizza-challenge.png',
        },
      ],
    },
    footer: {
      headline: "Let's work together on your next product.",
      email: 'gizemgunduz77@gmail.com',
      socials: [
        { label: 'Personal Blog', href: '#' },
        { label: 'Github', href: 'https://github.com/gegetxt' },
        { label: 'Linkedin', href: 'http://www.linkedin.com/in/gizem-g-4b48a124' },
      ],
    },
  },
}

export default content
