import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import AnimersLogo from "./index"

const story = storiesOf("Atoms | AnimersLogo", module)
    .addDecorator(withInfo)

// Animers logo
story.add("Component", () => (
    <div style={{ width: "50px" }}>
        <AnimersLogo />
    </div>
))