import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import Members from "./index"
import data from "../../../../config/translations/en.json"

const story = storiesOf("Organisms|Members", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
story.add("Members", () => (
  <div style={{ maxWidth: "500px" }}>
    <Members membersList={data.team} />
  </div>
))
