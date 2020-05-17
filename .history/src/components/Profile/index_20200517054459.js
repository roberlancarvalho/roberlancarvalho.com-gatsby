import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import * as S from "./styled"

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

    return (
        <div className="Profile-wrapp">
            <Avatar />
            <h1>{title}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )

}

export default Profile