import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"


import FAQBlock from "./index"

const story = storiesOf("Organisms | FAQBlock", module)
    .addDecorator(withInfo)
// Email CTA message for footer
story.add("Component", () => (
    <FAQBlock />
))