import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import MenuLink from "./index"

const story = storiesOf("Atoms | MenuLink", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Navigation menu link
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <MenuLink linkName={text("Link name", "Events")} />
    </div>
)
)