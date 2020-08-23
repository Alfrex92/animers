import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import BackArrow from "./index"

const story = storiesOf("Atoms | NavBackArrow", module)
    .addDecorator(withInfo)

// Back arrow for mobile navigation header
story.add("Component", () => (
    <div style={{ width: "50px" }}>
        <BackArrow />
    </div>
))