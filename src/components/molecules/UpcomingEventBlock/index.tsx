import React from 'react'
import { StyleUpcomingEventWrapper, StyleUpcomingEventTop, StyleUpcomingEventInner, StyleUpcomingEventInnerLeft, StyleUpcomingEventInnerRight} from "./styles"
import UpcomingEventMobile from "../../atoms/UpcomingEventMobile"
import EventListLink from "../../atoms/EventListLink"
import EventTitle from "../../atoms/EventTitle"
import NextEventDateTime from "../../atoms/NextEventDateTime"
import BasicButton from "../BasicButton"

interface UpcomingEventBlockInterface {
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

const UpcomingEventBlock: React.FC<UpcomingEventBlockInterface> = (
    props: UpcomingEventBlockInterface
) => {
    return (
        <StyleUpcomingEventWrapper>
            <StyleUpcomingEventTop>
                <UpcomingEventMobile textContent={props.upcomingEventContent}/>
                <EventListLink linkContent={props.linkContent}/>
            </StyleUpcomingEventTop>
            <StyleUpcomingEventInner>
                <StyleUpcomingEventInnerLeft>
                    <EventTitle eventTitle={props.eventTitle}/>
                    <NextEventDateTime date={props.eventDateTime.date} time={props.eventDateTime.time} location={props.eventDateTime.location}/>
                </StyleUpcomingEventInnerLeft>
                <StyleUpcomingEventInnerRight>
                    <BasicButton buttonColor={props.button.buttonColor} textColor={props.button.textColor} hasBorder={props.button.hasBorder} children={props.button.children}/>
                </StyleUpcomingEventInnerRight>
            </StyleUpcomingEventInner>
        </StyleUpcomingEventWrapper>
    )
}

export default UpcomingEventBlock