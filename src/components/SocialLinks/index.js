import React from "react"
import ReactGA from "react-ga"

import links from "./content"
import Icons from "./Icons"

import * as S from "./styled"

const socialLinkClickTrack = (social) => {
  ReactGA.event({
    category: "social link",
    action: "click",
    label: social,
  })
}

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, i) => {
        // Assegure-se de que Icons[link.label] esteja corretamente mapeado para o ícone desejado
        const Icon = Icons[link.label] // Supondo que 'label' é a chave correta para acessar o ícone

        return (
          <li key={i}>
            {/* Use 'aria-label' para acessibilidade */}
            <a
              href={link.url}
              aria-label={link.label} // Fornecendo um rótulo acessível para leitores de tela
              title={link.label} // O título também ajuda com a acessibilidade
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => socialLinkClickTrack(link.label)} // 'label' parece ser a chave intencionada para o rastreamento
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </a>
          </li>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks