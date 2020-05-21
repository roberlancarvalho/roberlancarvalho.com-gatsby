import React from "react"

import * as S from "./styled"

const PostItem = ({slug, category, date, timeToRead}) => (
    <S.PostItemLink to={slug}>
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">{category}</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
                <S.PostItemTitle>
                    {title}
        </S.PostItemTitle>
                <S.PostItemDescription>
                    {description}
        </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem