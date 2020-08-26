import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import CloseIcon from "./index"

const story = storiesOf("Atoms | CloseIcon", module)
    .addDecorator(withInfo)
// Close icon ( X ) for mobile navigation menu
story.add("Component", () => (
    <div style={{ width: "50px" }}>
        <CloseIcon />
    </div>
))