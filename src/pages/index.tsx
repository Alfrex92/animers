import React from "react"
import { graphql, Link } from "gatsby"
import LocalizedLink from "../components/localizedLink"
import useHurrDurr from "../components/useHurrDurr"
import UpcomingEventPanel from "../components/organisms/UpcomingEventPanel"

// const query = graphql`
//   query Index {
//     allFile(filter: {sourceInstanceName: {eq: "translations"}}) {
//     edges {
//       node {
//         id
//       }
//     }
//   }
//   translationsJson(upcomingEvent: {buttonContent: {}, label: {}, linkContent: {}}) {
//     id
//     emailCTA
//     events {
//       date
//       eventID
//       location
//       time
//       title
//     }
//     gallery {
//       alt
//       id
//       url
//     }
//     upcomingEvent {
//       buttonContent
//       label
//       linkContent
//     }
//   }
//   }
// `


const Index = () => {
    const { upcomingEvent, events } = useHurrDurr()
    console.log(upcomingEvent)
    return (
        <div>
            <UpcomingEventPanel upcomingEventBlock={{
                upcomingEventContent: upcomingEvent.label, linkContent: upcomingEvent.linkContent, eventTitle: events[0].title,
                 eventDateTime: {date: events[0].date, time: events[0].time, location: events[0].location},
                 button: {buttonColor: "#ffffff", textColor: "#f92b00", hasBorder: false, children: upcomingEvent.buttonContent}}}
                 desktopBlockTitle={upcomingEvent.label}
                 desktopCountdownContent={`in ${Math.floor(Math.random()*10)} days and ${Math.floor(Math.random()*10)} hours`}
            />
            <Link to="/homepage">HOMEPAGE</Link>
            <Link to="/faqPage">FAQS</Link>
        </div>
    )
}

export default Index

