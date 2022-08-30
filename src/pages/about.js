import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre Mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Olá! Sou Roberlan Oliveira de Carvalho. Sou desenvolvedor Full Stack;
        Empreendedor; Fundador da{" "}
        <a
          href="https://tecnorth.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tec North
        </a>{" "}
        e músico nas horas vagas.
      </p>

      <p>
        Graduando em Sistemas de Informação pela Unicatólica de Quixadá. Como
        desenvolvedor web, sou apaxinado por tecnologia. Minhas habilidades são:
        HTML, CSS, JavaScript, ReactJS, AngularJS, Java / Spring Boot, React
        Native, NodeJS e PostgreSQL. Trabalhar com TI, para mim não é um
        trabalho, é uma diversão.
      </p>

      <p>
        Eu gosto de trabalhar em equipe, e no tempo livre, gosto de ensinar e
        aprender com amigos e colegas sobre coisas da área, acho que por isso
        nasceu esse blog. Adoro desafios.
      </p>
      <p>
        Desenvolvo sites, lojas, portais e aplicações web em geral, utilizando
        algumas das principais tecnologias do mercado.
      </p>

      <h2>Habilidades:</h2>

      <ul>
        <li>HTML e Template Languages;</li>
        <li>CSS (Stylus, Sass, Less, PostCSS);</li>
        <li>Javascript / Typescript;</li>
        <li>ReactJS;</li>
        <li>AngularJS;</li>
        <li>React Native;</li>
        <li>NodeJS.</li>
        <li>Java;</li>
        <li>Spring Boot.</li>
        <li>Postgre SQL.</li>
        <li>Oracle SQL.</li>
      </ul>

      <p>Tem alguma ideia interessante? Entre em contato comigo!</p>

      <h2>Contato:</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais:
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
