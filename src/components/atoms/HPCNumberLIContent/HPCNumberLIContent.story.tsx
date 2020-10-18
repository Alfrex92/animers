import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import HPCNumberListContent from "./index"

const story = storiesOf("Atoms | HPCNumberLIContent", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Content for signup steps of homepage numbered list
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <HPCNumberListContent content={text("Content", "And join our community")} />
    </div>
)
)