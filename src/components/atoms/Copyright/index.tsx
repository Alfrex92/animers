import React from 'react'
import { StyleCopyrightWrapper, StyleCopyrightContent } from "./styles"

interface CopyrightInterface {
    content: string,
}

const Copyright: React.FC<CopyrightInterface> = (
    props: CopyrightInterface
) => {
    return (
        <StyleCopyrightWrapper>
            <StyleCopyrightContent>{props.content}</StyleCopyrightContent>
        </StyleCopyrightWrapper>
    )
}

export default Copyright
