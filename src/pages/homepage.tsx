import React from 'react'
import useTranslations from "../components/useTranslations"
import UpcomingEventPanel from "../components/organisms/UpcomingEventPanel"

const Homepage = () => {
    const { events, upcomingEvent } = useTranslations()
    return (
        <div>
            <UpcomingEventPanel upcomingEventBlock={{
                upcomingEventContent: upcomingEvent.label, linkContent: upcomingEvent.linkContent, eventTitle: events[0].title,
                 eventDateTime: {date: events[0].date, time: events[0].time, location: events[0].location},
                 button: {buttonColor: "#ffffff", textColor: "#f92b00", hasBorder: false, children: upcomingEvent.buttonContent}}}
                 desktopBlockTitle={upcomingEvent.label}
                 desktopCountdownContent={`in ${Math.floor(Math.random()*10)} days and ${Math.floor(Math.random()*10)} hours`}
            />
        </div>
    )
}

export default Homepage
