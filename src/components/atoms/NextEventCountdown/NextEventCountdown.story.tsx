import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import UpcomingEventCountdown from "./index"


const story = storiesOf("Atoms | UpcomingEventCountdown", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Countdown until next event (desktop only)
story.add("Component", () => (
    <div>
        <UpcomingEventCountdown textContent={text("Text content", "in 5 days and 6 hours")} />
    </div>
))