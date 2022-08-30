import React from "react"
import PropTypes from "prop-types"
import ReactGA from "react-ga"

import Image from "./Image"
import * as S from "./styled"

const portfolioClickTrack = course => {
  ReactGA.event({
    category: "cursos",
    action: "click",
    label: `Link Curso - ${course}`,
  })
}

const Portfolio = ({ title, description, link, image }) => {
  return (
    <S.PortfolioLink
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      onClick={() => portfolioClickTrack(title)}
    >
      <S.PortfolioWrapper>
        <Image filename={image} alt={title} />
        <S.PortfolioInfo>
          <S.PortfolioTitle>{title}</S.PortfolioTitle>
          <S.PortfolioDescription>{description}</S.PortfolioDescription>
        </S.PortfolioInfo>
      </S.PortfolioWrapper>
    </S.PortfolioLink>
  )
}

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Portfolio
