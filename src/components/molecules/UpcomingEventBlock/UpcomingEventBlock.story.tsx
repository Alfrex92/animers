import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import UpcomingEventBlock from "./index"


const story = storiesOf("Molecules | UpcomingEventBlock", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Complete 'next event block' (mobile), right portion (desktop)
story.add("Component", () => (
    <div>
        <UpcomingEventBlock
            upcomingEventContent={text("Block title content", "Upcoming Event")}
            linkContent={text("Link content", "See all")}
            eventTitle={text("Event title", `${data.events[0].title}`)}        
            eventDateTime={{date: text("Date", `${data.events[0].date}`), time: text("Time", `${data.events[0].time}`), location: text("Location", `${data.events[0].location}`)}}
            button={{buttonColor: color("Button color", "#ffffff"), textColor: color("Text color", "#f92b00"), children: text("Message", "Attend"), hasBorder: boolean("Border?", false)}}
        />
    </div>
))