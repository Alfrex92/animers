import * as React from 'react'
import { StyleBackArrowContainer, StyleBackArrowIcon } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const BackArrow: React.FC = () => {
    return (
        <StyleBackArrowContainer>
            <StyleBackArrowIcon><FontAwesomeIcon icon={faArrowLeft} /></StyleBackArrowIcon>
        </StyleBackArrowContainer>
    )
}

export default BackArrow