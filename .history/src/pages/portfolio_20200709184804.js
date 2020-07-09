import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
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
        Curso Sistemas de Informação na Unicatólica de Quixadá.
        Como desenvolvedor web, sou apaxinado por tecnologia. Minhas habilidades são: JavaScript, PHP,
        Angular, React, Node e Python.
        Trabalhar com TI, para mim não é um trabalho, é uma diversão.
      </p>
    </MainContent>
  </Layout>
)

export default PortfolioPage