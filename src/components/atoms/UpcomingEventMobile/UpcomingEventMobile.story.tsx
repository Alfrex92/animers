import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import UpcomingEventMobile from "./index"


const story = storiesOf("Atoms | UpcomingEventMobile", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// 'Upcoming Event' text above upcoming event info
// Desktop version appears in different element
story.add("Component", () => (
    <div>
        <UpcomingEventMobile textContent={text("Text content", "Upcoming Event")} />
    </div>
))