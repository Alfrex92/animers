import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import NextEventDateTime from "./index"


const story = storiesOf("Atoms | NextEventDateTime", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// 'See all' (events) link above upcoming event info
story.add("Component", () => (
    <div>
        <NextEventDateTime date={text("Date", `${data.events[0].date}`)} time={text("Time", `${data.events[0].time}`)} location={text("Time", `${data.events[0].location}`)}/>
    </div>
))