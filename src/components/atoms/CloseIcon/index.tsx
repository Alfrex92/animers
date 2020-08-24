import * as React from 'react'
import { StyleMenuCloseContainer, StyleMenuCloseIcon } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const CloseIcon: React.FC = () => {
    return (
        <StyleMenuCloseContainer>
            <StyleMenuCloseIcon><FontAwesomeIcon icon={faTimes} /></StyleMenuCloseIcon>
        </StyleMenuCloseContainer>
    )
}

export default CloseIcon