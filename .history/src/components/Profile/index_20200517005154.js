import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, position, description },
        },
    } = useStaticQuery(graphql`
    query MySiteMetadata {
        site {
            siteMetadata { 
                title
                position
                description
            }
        }
    }
`)
}

const Profile = () => (
    <StaticQuery
        query={graphql`
    query MySiteMetadata {
        site {
            siteMetadata { 
                title
                position
                description
            }
        }
    }
`}

        render={({ site: { siteMetadata: { title, position, description },
        },
        }) => (
                <div className="Profile-wrapp">
                    <h1>{title}</h1>
                    <h2>{position}</h2>
                    <p>{description}</p>
                </div>

            )}
    />
)

export default Profile