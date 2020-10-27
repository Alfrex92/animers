import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import BasicButton from "./index"

const story = storiesOf("Molecules | BasicButton", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)

// Basic button
story.add("Red-White", () => (
  <BasicButton
    buttonColor={color("Button color", "#f92b00")}
    textColor={color("Text color", "#ffffff")}
    children={text("Message", "Join Us")}
    hasBorder={boolean("Border?", false)}
  />
))

story.add("White-Red", () => (
  <BasicButton
    buttonColor={color("Button color", "#ffffff")}
    textColor={color("Text color", "#f92b00")}
    children={text("Message", "Join Us")}
    hasBorder={boolean("Border?", false)}
  />
))

story.add("White-Aqua", () => (
  <BasicButton
    buttonColor={color("Button color", "#ffffff")}
    textColor={color("Text color", "#46adff")}
    children={text("Message", "Join Us")}
    hasBorder={boolean("Border?", true)}
  />
))