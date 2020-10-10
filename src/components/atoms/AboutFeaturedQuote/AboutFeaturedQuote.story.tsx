import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import AboutFeaturedQuote from "./index"

const story = storiesOf("Atoms | AboutFeaturedQuote", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Featured quote (pull quote) for About Us page
story.add("Component", () => (
  <div>
    <AboutFeaturedQuote
      content={text(
        "Quote content",
        `${data.aboutUs[2]?.paragraphs[4]?.content}`
      )}
    />
  </div>
))
