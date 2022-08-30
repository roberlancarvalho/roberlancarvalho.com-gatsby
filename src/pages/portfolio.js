import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio"

// import SocialLinks from '../components/SocialLinks'
import { MainContent } from "../styles/base"

const portfolioList = [
  {
    title: "Gama GPS",
    image: "gamagps.png",
    link: "http://gamagps.com",
    description: "Site Institucional",
  },
  {
    title: "Team Comics",
    image: "teamcomics.png",
    link: "http://teamcomics.com.br/",
    description: "Portal de Notícias",
  },
  {
    title: "Camisaria GC Imports",
    image: "camisariagcimports.png",
    link: "https://camisariagcimports.com/",
    description: "Loja Virtual",
  },
  {
    title: "Set Tarefas",
    image: "settarefas.png",
    link: "https://www.tecnorth.com.br/portfolio.html",
    description: "Sistema Web de Gestão",
  },
  {
    title: "Carline Imports",
    image: "carlineimports.png",
    link: "https://www.tecnorth.com.br/portfolio.html",
    description: "Loja Virtual",
  },
  {
    title: "Master Point",
    image: "masterpoint.png",
    link: "https://www.tecnorth.com.br/portfolio.html",
    description: "Painel Administrativo",
  },
  {
    title: "Musicalmente Falando",
    image: "muscialmentefalando.png",
    link: "https://musicalmentefalando.com/",
    description: "Blog de Música",
  },
  {
    title: "Salão Clube da Beleza",
    image: "clubedabeleza.png",
    link: "https://salaoclubedabeleza.com/",
    description: "Site Institucional",
  },
  {
    title: "Jogo da Velha Web",
    image: "jogodavelha.png",
    link: "https://roberlan-jogodavelha.netlify.app/",
    description: "Jogo Online",
  },
  // {
  //   title: "RP Finanças",
  //   image: "jogodavelha.png",
  //   link: "https://rpfinancas.com/",
  //   description: "Site de Finanças",
  // },
  // {
  //   title: "Calculadora RP Finanças",
  //   image: "jogodavelha.png",
  //   link: "https://calculadora.rpfinancas.com/",
  //   description: "Calculadora Online",
  // },
]

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfólio" description="Conheça alguns dos meus projetos" />

    <MainContent>
      <h1>Portfólio</h1>

      <h4>Conheça alguns dos meus projetos</h4>
      <p>
        Veja mais no{" "}
        <a
          href="https://github.com/roberlancarvalho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </MainContent>

    {portfolioList.map(({ title, description, link, image }, i) => (
      <Portfolio
        key={i}
        title={title}
        description={description}
        link={link}
        image={image}
      />
    ))}
  </Layout>
)

export default PortfolioPage
