import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import FAQCategory from "./index"

const story = storiesOf("Atoms | FAQCategory", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Email CTA message for footer
story.add("Component", () => (
    <div>
        <FAQCategory content={text("Category title", "About Events")} />
    </div>
))