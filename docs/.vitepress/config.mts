import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Fitrah/",
  title: "Fitrah App",
  description: "Fitrah - Azkar, Duaa, and Quran for Muslims with focus on Quality and Privacy",
  head: [['link', { rel: 'icon', href: '/Fitrah/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/team' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Contribution',
        items: [
          { text: 'Documentation', link: '/docs_contribution_guides' },
          { text: 'iOS Application', link: '/app_contribution_guides' },
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Software Architecture', link: '/application_architecture' },
          {
            text: 'Feature Architecture',
            items: [
              { text: 'Azkar Feature', link: '/azkar_feature_architecture' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KarimEbrahemAbdelaziz' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/karimebrahem' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 <a href="https://www.linkedin.com/in/karimebrahem">Karem Ebrahim</a>'
    }
  }
})
