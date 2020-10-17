import React from 'react'
import {StyleTextWrapper, StyleText} from "./styles"

interface UpcomingEventMobileInterface {
    textContent: string
}

const UpcomingEventMobile: React.FC<UpcomingEventMobileInterface> = (
    props: UpcomingEventMobileInterface
) => {
    return (
        <StyleTextWrapper>
            <StyleText>{props.textContent}</StyleText>
        </StyleTextWrapper>
    )
}

export default UpcomingEventMobile