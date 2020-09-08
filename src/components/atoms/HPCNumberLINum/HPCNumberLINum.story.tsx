import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import HPCNumberListNum from "./index"

const story = storiesOf("Atoms | HPCNumberLINum", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Step number element for signup steps of homepage numbered list
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <HPCNumberListNum content={text("Content", "1")} />
    </div>
)
)