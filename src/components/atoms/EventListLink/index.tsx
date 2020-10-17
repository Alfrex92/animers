import React from 'react'
import {StyleLinkWrapper, StyleLink} from "./styles"

interface EventListLinkInterface {
    linkContent: string
}

const EventListLink: React.FC<EventListLinkInterface> = (
    props: EventListLinkInterface
) => {
    return (
        <StyleLinkWrapper>
            <StyleLink>{props.linkContent}</StyleLink>
        </StyleLinkWrapper>
    )
}

export default EventListLink