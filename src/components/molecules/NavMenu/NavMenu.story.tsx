import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import NavMenu from "./index"

const story = storiesOf("Molecules | NavMenu", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Mobile navigation menu
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <NavMenu />
    </div>
)
)