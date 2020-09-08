import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import HPCNumberListTitle from "./index"

const story = storiesOf("Atoms | HPCNumberLITitle", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Title for signup steps of homepage numbered list
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <HPCNumberListTitle title={text("Title", "Register on Meetup")} />
    </div>
)
)