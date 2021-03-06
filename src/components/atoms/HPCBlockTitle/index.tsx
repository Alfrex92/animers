import React from 'react'
import { StyleHPCBlockTitleWrapper, StyleHPCBlockTitle } from "./styles"

interface HPCBlockTitleInterface {
    title: string,
}

const HPCBlockTitle: React.FC<HPCBlockTitleInterface> = (
    props: HPCBlockTitleInterface
) => {
    return (
        <StyleHPCBlockTitleWrapper>
            <StyleHPCBlockTitle>{props.title}</StyleHPCBlockTitle>
        </StyleHPCBlockTitleWrapper>
    )
}

export default HPCBlockTitle
