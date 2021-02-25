import React from 'react'
import { StyleEventDesktopBlockWrapper} from "./styles"
import UpcomingEventDesktop from "../../atoms/UpcomingEventDesktop"
import NextEventCountdown from "../../atoms/NextEventCountdown"

interface UpcomingEventDesktopBlockInterface {
    titleTextContent: string
    countdownTextContent: string;
}

const EventDesktopBlock: React.FC<UpcomingEventDesktopBlockInterface> = (
    props: UpcomingEventDesktopBlockInterface
) => {
    return (
        <StyleEventDesktopBlockWrapper>
            <UpcomingEventDesktop textContent={props.titleTextContent} />
            <NextEventCountdown textContent={props.countdownTextContent}/>
        </StyleEventDesktopBlockWrapper>
    )
}

export default EventDesktopBlock