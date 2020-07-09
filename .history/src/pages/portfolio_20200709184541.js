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
    <h1>Sobre mim</h1>
    <p>
      Olá! Sou Roberlan Oliveira de Carvalho, nasci em Mombaça-CE e moro atualmente em Quixadá-CE.
        Sou desenvolvedor e fundador da {' '}
      <a href="https://tecnorth.com.br/" target="_blank" rel="noopener noreferrer">
        Tec North.
        </a>
    </p>
    {/* , além de ser um nômade digital e tirar{' '}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          algumas fotos
        </a>{' '}
        por onde vou.
      </p> */}

    <p>
      Curso Sistemas de Informação na Unicatólica de Quixadá.
      Como desenvolvedor web, sou apaxinado por tecnologia. Minhas habilidades são: JavaScript, PHP,
      Angular, React, Node e Python.
      Trabalhar com TI, para mim não é um trabalho, é uma diversão.
      </p>

    <p>
      Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
      gosto de ensinar meus amigos e clientes sobre alguma coisa que aprendi, mais relacionado à tecologia,
      acho que por isso nasceu esse blog.
      </p>

    <h2>Habilidades</h2>

    <ul>
      <li>HTML e Template Languages</li>
      <li>CSS (Stylus, Sass, Less, PostCSS)</li>
      <li>Javascript</li>
      <li>ReactJS / Redux / Flux</li>
      <li>NodeJS</li>
      <li>Python</li>
      <li>MySQL - MongoDB</li>
    </ul>

    <h2>Contato:</h2>

    <p>
      Você pode entrar em contato comigo através de qualquer uma das minhas
      redes sociais.
      </p>

    {/* <SocialLinks hideStyle /> */}
  </MainContent>
</Layout>
)

export default PortfolioPage