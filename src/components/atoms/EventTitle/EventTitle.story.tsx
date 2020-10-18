import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import EventTitle from "./index"


const story = storiesOf("Atoms | EventTitle", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// English/Japanese event title for upcoming event info
story.add("Component", () => (
    <div>
        <EventTitle eventTitle={text("Event title", `${data.events[0].title}`)} />
    </div>
))