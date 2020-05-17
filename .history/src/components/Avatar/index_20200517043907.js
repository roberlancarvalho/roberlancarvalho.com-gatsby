import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
                    childImageSharp {
                        fixed(maxWidth: 70, maxHeight: 70) {
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return (
        <Img
            fixed={avatarImage.childImageSharp.fixed}
        />
    )

}

export default Avatar