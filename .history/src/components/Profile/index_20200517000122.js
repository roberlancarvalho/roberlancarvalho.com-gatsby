import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
    <StaticQuery
        query={graphql`
    query MySiteMetadata {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`}

        render={data => (
            <div className="Profile-wrapp">
                <h1>Roberlan</h1>
                <h2>Programador</h2>
                <p>Desenvolvedor web na empresa Tec North</p>
            </div>

        )}
    />
)

export default Profile