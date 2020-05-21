import React from "react"

import * as S from "./styled"

const PostItem = ({slug, category, date, timeToRead}) => (
    <S.PostItemLink to={slug}>
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">{category}</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
                <S.PostItemTitle>
                    Diga não ao Medium: tenha sua própria plataforma
        </S.PostItemTitle>
                <S.PostItemDescription>
                    Algumas razões para você ter sua própria plataforma ao invés de
                    soluções como o Medium.
        </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem