import React from 'react'
import { StyleHPCNumberLITitleWrapper, StyleHPCNumberLITitle } from "./styles"

interface HPCNumberListTitleInterface {
    title: string,
}

const HPCNumberListTitle: React.FC<HPCNumberListTitleInterface> = (
    props: HPCNumberListTitleInterface
) => {
    return (
        <StyleHPCNumberLITitleWrapper>
            <StyleHPCNumberLITitle>{props.title}</StyleHPCNumberLITitle>
        </StyleHPCNumberLITitleWrapper>
    )
}

export default HPCNumberListTitle
