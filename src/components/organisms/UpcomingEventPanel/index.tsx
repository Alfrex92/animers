import React from 'react'
import {StyleUpcomingEventPanelWrapper} from "./styles"
import UpcomingEventBlock from "../../molecules/UpcomingEventBlock"
import UpcomingEventDesktopBlock from "../../molecules/UpcomingEventDesktopBlock"

interface UpcomingEventPanelInterface {
    upcomingEventBlock: UpcomingEvenBlockInterface;
    desktopBlockTitle: string;
    desktopCountdownContent: string;
}

interface UpcomingEvenBlockInterface {
    upcomingEventContent: string;
    linkContent: string;
    eventTitle: string;
    eventDateTime: EventDateTimeInterface;
    button: ButtonInterface;
}

interface EventDateTimeInterface {
    date: string;
    time: string;
    location: string;
}

interface ButtonInterface {
    buttonColor: string;
    textColor: string;
    hasBorder: boolean;
    children: any;
}

const UpcomingEventPanel: React.FC<UpcomingEventPanelInterface> = (
    props: UpcomingEventPanelInterface
) => {
    return (
        <StyleUpcomingEventPanelWrapper>
            <UpcomingEventDesktopBlock titleTextContent={props.desktopBlockTitle} countdownTextContent={props.desktopCountdownContent}/>
            <UpcomingEventBlock upcomingEventContent={props.upcomingEventBlock.upcomingEventContent} linkContent={props.upcomingEventBlock.linkContent} eventTitle={props.upcomingEventBlock.eventTitle} eventDateTime={props.upcomingEventBlock.eventDateTime} button={props.upcomingEventBlock.button}/>
        </StyleUpcomingEventPanelWrapper>
    )
}

export default UpcomingEventPanel