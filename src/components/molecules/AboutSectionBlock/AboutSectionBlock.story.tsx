import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import AboutSectionBlock from "./index"

const story = storiesOf("Molecules | AboutSectionBlock", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Centered section blocks for About Us page
story.add("Component", () => (
  <div>
    <AboutSectionBlock
      title={text("Section title content", `${data.aboutUs[0].sectionTitle}`)}
      text={text("Section text content", `${data.aboutUs[0].content}`)}
    />
  </div>
))
