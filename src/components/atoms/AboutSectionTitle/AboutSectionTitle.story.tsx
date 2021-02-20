import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import AboutSectionTitle from "./index"

const story = storiesOf("Atoms | AboutSectionTitle", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Section title for About Us page
story.add("Component", () => (
  <div>
    <AboutSectionTitle
      content={text("Title content", `${data.aboutUs[0].sectionTitle}`)}
    />
  </div>
))
