import React from 'react'
import {StyleCountdownWrapper, StyleCountdown} from "./styles"

interface UpcomingEventCountdownInterface {
    textContent: string
}

const UpcomingEventCountdown: React.FC<UpcomingEventCountdownInterface> = (
    props: UpcomingEventCountdownInterface
) => {
    return (
        <StyleCountdownWrapper>
            <StyleCountdown>{props.textContent}</StyleCountdown>
        </StyleCountdownWrapper>
    )
}

export default UpcomingEventCountdown