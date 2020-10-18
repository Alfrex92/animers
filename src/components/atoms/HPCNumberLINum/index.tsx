import React from 'react'
import { StyleHPCNumberLINumWrapper, StyleHPCNumberLINum } from "./styles"

interface HPCNumberListContentInterface {
    content: string,
}

const HPCNumberListNum: React.FC<HPCNumberListContentInterface> = (
    props: HPCNumberListContentInterface
) => {
    return (
        <StyleHPCNumberLINumWrapper>
            <StyleHPCNumberLINum>{props.content}</StyleHPCNumberLINum>
        </StyleHPCNumberLINumWrapper>
    )
}

export default HPCNumberListNum
