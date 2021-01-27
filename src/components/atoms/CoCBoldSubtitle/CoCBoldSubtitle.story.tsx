import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import CoCBoldSubtitle from "./index"

const story = storiesOf("Atoms | CoCBoldSubtitle", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Bold subtitle text in Code of Conduct
story.add("Component", () => (
  <div>
    <CoCBoldSubtitle
      content={text(
        "Subtitle content",
        `${data.codeOfConduct.sections[0].sectionTitle}`
      )}
    />
  </div>
))
