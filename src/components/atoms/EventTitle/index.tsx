import React from 'react'
import {StyleEventTitleWrapper, StyleEventTitle} from "./styles"

interface EventTitleInterface {
    eventTitle: string
}

const EventTitle: React.FC<EventTitleInterface> = (
    props: EventTitleInterface
) => {
    return (
        <StyleEventTitleWrapper>
            <StyleEventTitle>{props.eventTitle}</StyleEventTitle>
        </StyleEventTitleWrapper>
    )
}

export default EventTitle