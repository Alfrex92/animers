import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import MobilePageHeader from "./index"

const story = storiesOf("Molecules|MobilePageHeader", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// imagesbutton
story.add("Component", () => (
  <div>
    <MobilePageHeader pageTitle={text("Page title:", "Code of Conduct")}/>
  </div>
))
