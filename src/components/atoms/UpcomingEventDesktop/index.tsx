import React from 'react'
import {StyleTextWrapper, StyleText} from "./styles"

interface UpcomingEventDesktopInterface {
    textContent: string
}

const UpcomingEventDesktop: React.FC<UpcomingEventDesktopInterface> = (
    props: UpcomingEventDesktopInterface
) => {
    return (
        <StyleTextWrapper>
            <StyleText>{props.textContent}</StyleText>
        </StyleTextWrapper>
    )
}

export default UpcomingEventDesktop