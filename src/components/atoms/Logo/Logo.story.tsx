import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import Logo from "./index"

const story = storiesOf("Atoms | Logo", module)
    .addDecorator(withInfo)

// Animers logo
story.add("Component", () => (
    <div style={{ width: "50px" }}>
        <Logo />
    </div>
))