import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import EventDesktopBlock from "./index"


const story = storiesOf("Molecules | EventDesktopBlock", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Title and countdown until next event (desktop only)
story.add("Component", () => (
    <div>
        <EventDesktopBlock titleTextContent={text("Title content", "Upcoming Event")}  countdownTextContent={text("Countdown content", "in 5 days and 6 hours")} />
    </div>
))