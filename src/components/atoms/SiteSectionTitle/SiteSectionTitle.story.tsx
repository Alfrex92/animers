import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import SiteSectionTitle from "./index"

const story = storiesOf("Atoms | SiteSectionTitle", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Homepage section title
story.add("Component", () => (
    <div style={{ maxWidth: "500px" }}>
        <SiteSectionTitle sectionTitle={text("Link name", "Photo Gallery")} />
    </div>
)
)