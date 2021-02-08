import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import CoCDisclaimer from "./index"

const story = storiesOf("Atoms | CoCDisclaimer", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Email CTA message for footer
story.add("Component", () => (
  <div>
    <CoCDisclaimer
      disclaimerContent={text(
        "Disclaimer content",
        `${data.codeOfConduct.disclaimer}`
      )}
    />
  </div>
))
