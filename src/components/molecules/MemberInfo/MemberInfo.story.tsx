import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import { withInfo } from "@storybook/addon-info"

import MemberInfo from "./index"

const story = storiesOf("Components|MemberInfo", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// imagesbutton
story.add("hEY Component", () => (
  <MemberInfo
    image={text("Image", "")}
    name={text("Name", "Alfredo")}
    description={text("Description", "Lorem Ipsum")}
    role={text("Role", "Co-organizer")}
    icon={"INSTAGRAM"}
    snsLink={text("SNS Link", "https://twitter.com/alfred_toh_")}
  />
))
