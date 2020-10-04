import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import CoCGreeting from "./index"

const story = storiesOf("Atoms | CoCGreeting", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Email CTA message for footer
story.add("Component", () => (
  <div>
    <CoCGreeting
      greetingContent={text(
        "Greeting content",
        `${data.codeOfConduct.greeting}`
      )}
    />
  </div>
))
