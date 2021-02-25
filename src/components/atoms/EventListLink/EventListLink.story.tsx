import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import EventListLink from "./index"


const story = storiesOf("Atoms | EventListLink", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// 'See all' (events) link above upcoming event info
story.add("Component", () => (
    <div>
        <EventListLink linkContent={text("Link content", "See all")} />
    </div>
))