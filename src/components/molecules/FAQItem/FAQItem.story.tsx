import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"


import FAQItem from "./index"

const story = storiesOf("Molecules | FAQItem", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Email CTA message for footer
story.add("Component", () => (
    <FAQItem question={text("Question", "When is the next event?")} answer={text("Answer", "Friday, October 31 at 20:00 in Ikebukuro")} />
))