import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import ScrollingGrid from "./index"

const story = storiesOf("Molecules | ScrollingGrid", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
//Gallery of multiple images
story.add("Component", () => (
    <ScrollingGrid />
))