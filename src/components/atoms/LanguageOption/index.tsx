import * as React from 'react'
import { StyleLanguageOptionContainer, StyleLanguageOption } from "./styles"

interface LanguageOptionInterface {
    language: string
}

const LanguageOption: React.FC<LanguageOptionInterface> = (
    props: LanguageOptionInterface
) => {
    return (
        <StyleLanguageOptionContainer>
            <StyleLanguageOption>{props.language}</StyleLanguageOption>
        </StyleLanguageOptionContainer>
    )
}

export default LanguageOption