import React from 'react'
import { StyleHPCPanelMessageWrapper, StyleHPCPanelMessage } from "./styles"

interface HPCPanelMessageInterface {
    content: string,
}

const HPCPanelMessage: React.FC<HPCPanelMessageInterface> = (
    props: HPCPanelMessageInterface
) => {
    return (
        <StyleHPCPanelMessageWrapper>
            <StyleHPCPanelMessage>{props.content}</StyleHPCPanelMessage>
        </StyleHPCPanelMessageWrapper>
    )
}

export default HPCPanelMessage
