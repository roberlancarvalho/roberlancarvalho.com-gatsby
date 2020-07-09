import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/Seo"
// import SocialLinks from '../components/SocialLinks'
import { MainContent } from '../styles/base'

const PortfolioPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Portfólio</h1>
      <p>
        Conheça o meu portólio no site da {' '}
        <a href="https://tecnorth.com.br/" target="_blank" rel="noopener noreferrer">
          Tec North.
        </a>
      </p>

      <p>
        Clique no link abaixo para conhecer o meu portfólio:
      </p>

      <p>
      <a href="https://tecnorth.com.br/portfolio" target="_blank" rel="noopener noreferrer">
          PORTFOLIO
        </a>
      </p>
    </MainContent>
  </Layout>
)

export default PortfolioPage