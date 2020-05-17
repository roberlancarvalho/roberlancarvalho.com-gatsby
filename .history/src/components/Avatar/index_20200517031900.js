import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 70, maxHeight: 70) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return <Img fluid={avatarImage.childImageSharp.fluid} className="roberlan" style={{width: "60px"}} />

}

export default Avatar