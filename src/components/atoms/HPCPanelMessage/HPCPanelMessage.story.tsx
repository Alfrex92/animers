import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import HPCPanelMessage from "./index"

const story = storiesOf("Atoms | HPCPanelMessage", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Content of message panel on homepage
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <HPCPanelMessage content={text("Content", "Don't miss your chance to join the largest anime community in Tokyo")} />
    </div>
)
)