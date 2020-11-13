import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import UpcomingEventPanel from "./index"


const story = storiesOf("Organism | UpcomingEventPanel", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Complete 'next event' panel for desktop
story.add("Component", () => (
    <div>
        <UpcomingEventPanel upcomingEventBlock={{upcomingEventContent: text("Block title content", "Upcoming Event"), linkContent: text("Link content", "See all"),
            eventTitle: text("Event title", `${data.events[0].title}`),
            eventDateTime: {date: text("Date", `${data.events[0].date}`), time: text("Time", `${data.events[0].time}`), location: text("Location", `${data.events[0].location}`)},
            button: {buttonColor: color("Button color", "#ffffff"), textColor: color("Text color", "#f92b00"), children: text("Message", "Attend"), hasBorder: boolean("Border?", false)}
        }} 
        desktopBlockTitle={text("Title content", data.upcomingEvent.label)} desktopCountdownContent={text("Countdown content", "in 5 days and 6 hours")}
        />
    </div>
))