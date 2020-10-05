import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import CoCSectionTitle from "./index"

const story = storiesOf("Atoms | CoCSectionTitle", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Section title text in Code of Conduct
story.add("Component", () => (
  <div>
    <CoCSectionTitle
      content={text(
        "Subtitle content",
        `${data.codeOfConduct.sections[0].sectionTitle}`
      )}
    />
  </div>
))
