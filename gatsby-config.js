require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Roberlan Carvalho`,
    description: `Tudo sobre tecnologia, programação e outras coisas mais`,
    position: `Desenvolvedor Full Stack`,
    author: `@roberlancarvalho`,
    siteUrl: `https://roberlancarvalho.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-google-analytics`,
    // `gatsby-plugin-google-adsense`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-172158139-1",
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-adsense`,
    //   options: {
    //     publisherId: `ca-pub-2351736617081202`
    //   },
    // },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    /* CONFIGURAÇÃO DO PLUGIN */
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Diretório com os JSON com as palavras a serem traduzidas
        path: `${__dirname}/src/intl`,
        // Idiomas suportados
        languages: [`pt`, `en`],
        // Idioma padrão
        defaultLanguage: `pt`,
        // Redireciona para `/pt` ao entrar na rota `/`
        redirect: false,
      },
    },
    /* FIM DA CONFIGURAÇÃO */

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,// default: false
        // Manter sempre o plugin do Algolia na versão 0.5.0
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roberlan Carvalho`,
        short_name: `Roberlan Carvalho`,
        start_url: `/`,
        background_color: `#272e39`,
        theme_color: `#272e39`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ],
}
