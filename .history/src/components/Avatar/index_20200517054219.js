import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import * as S from "./styled"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
                    childImageSharp {
                        fixed(width: 70, height: 70) {
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return (
        <S.AvatarWrapper
            fixed={avatarImage.childImageSharp.fixed}
        />
    )

}

export default Avatar