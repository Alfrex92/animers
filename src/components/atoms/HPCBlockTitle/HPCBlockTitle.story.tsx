import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import HPCBlockTitle from "./index"

const story = storiesOf("Atoms | HPCBlockTitle", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Title for homepage content block
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <HPCBlockTitle title={text("Title", "Your new adventure starts here!")} />
    </div>
)
)