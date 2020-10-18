import React from 'react'
import { StyleHPCNumberLIContentWrapper, StyleHPCNumberLIContent } from "./styles"

interface HPCNumberListContentInterface {
    content: string,
}

const HPCNumberListContent: React.FC<HPCNumberListContentInterface> = (
    props: HPCNumberListContentInterface
) => {
    return (
        <StyleHPCNumberLIContentWrapper>
            <StyleHPCNumberLIContent>{props.content}</StyleHPCNumberLIContent>
        </StyleHPCNumberLIContentWrapper>
    )
}

export default HPCNumberListContent
