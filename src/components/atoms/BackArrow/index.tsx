import * as React from 'react'
import { StyleBackArrowContainer, StyleBackArrowIcon } from "./styles"

const BackArrow: React.FC = () => {
    return (
        <StyleBackArrowContainer>
            <StyleBackArrowIcon>←</StyleBackArrowIcon>
        </StyleBackArrowContainer>
    )
}

export default BackArrow