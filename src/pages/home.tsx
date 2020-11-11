import React from 'react'
import { graphql } from "gatsby"
import useTranslations from "../components/useTranslations"
import UpcomingEventPanel from "../components/organisms/UpcomingEventPanel"

const Home = () => {
    const { events, upcomingEvent  } = useTranslations()
    console.log("EVENTS:", events)
    return (
        <div>
            <h1>This is the home page</h1>
            <UpcomingEventPanel upcomingEventBlock={{
                upcomingEventContent: `${upcomingEvent.label}`, linkContent: `${upcomingEvent.linkContent}`,
                eventTitle: `${events[0].title}`, eventDateTime: {date: events[0].date, time: events[0].time, location: events[0].location},
                button: {buttonColor: "#ffffff", textColor: "#f92b00", children: "Attend", hasBorder: false}}}
             desktopBlockTitle={`${upcomingEvent.label}`}
             desktopCountdownContent={"in 5 days and 6 hours"}/>
        </div>
    )
}

export default Home

