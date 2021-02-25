import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import UpcomingEventDesktop from "./index"


const story = storiesOf("Atoms | UpcomingEventDesktop", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// 'Upcoming Event' text left of upcoming event info
// mobile version appears in different element
story.add("Component", () => (
    <div>
        <UpcomingEventDesktop textContent={text("Text content", "Upcoming Event")} />
    </div>
))