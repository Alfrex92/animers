import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import HPCNumberListItem from "./index"

const story = storiesOf("Molecule | HPCNumberListNumber", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Step number element for signup steps of homepage numbered list
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <HPCNumberListItem
            numContent={text("Number", "1")}
            liTitle={text("Title", "Register on Meetup")}
            liContent={text("Content", "And join our community")}
        />
    </div>
)
)