import React from 'react'
import {StyleDateTimeWrapper, StyleDateTime, StyleFAIcon} from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faMap } from "@fortawesome/free-regular-svg-icons"

interface EventDateTimeLocationInterface {
    date: string;
    time: string;
    location: string;
}

const NextEventDateTimeLocation: React.FC<EventDateTimeLocationInterface> = (
    props: EventDateTimeLocationInterface
) => {
    return (
        <StyleDateTimeWrapper>
            <StyleDateTime><StyleFAIcon icon={faCalendar} /><span>{props.date}</span><span>{" "}|{" "}</span><span>{props.time}</span></StyleDateTime>
            <StyleDateTime><StyleFAIcon icon={faMap} />{props.location}</StyleDateTime>
        </StyleDateTimeWrapper>
    )
}

export default NextEventDateTimeLocation