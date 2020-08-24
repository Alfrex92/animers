import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import BasicButton from "./index"

const story = storiesOf("Molecules | BasicButton", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)

// Basic button
story.add("Red-White", () => (
    <BasicButton buttonColor={"basic"} children={text("Message", "Join Us")} />

))

story.add("White-Red", () => (
    <BasicButton buttonColor={"whiteRed"} children={text("Message", "Join Us")} />
))

story.add("White-Aqua", () => (
    <BasicButton buttonColor={"whiteBlue"} children={text("Message", "Join Us")} />
))