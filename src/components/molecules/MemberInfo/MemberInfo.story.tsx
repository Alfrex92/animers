import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import MemberInfo from "./index"
import { domainUrl } from "../../../constants/others"

const memberImg = `${domainUrl}alfred.jpg`

const story = storiesOf("Molecules|MemberInfo", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// imagesbutton
story.add("Component", () => (
  <MemberInfo
    image={text("Image", memberImg)}
    name={text("Name", "Alfredo")}
    description={text("Description", "Lorem Ipsum")}
    role={text("Role", "Co-organizer")}
    icon={"INSTAGRAM"}
    snsLink={text("SNS Link", "https://twitter.com/alfred_toh_")}
  />
))
