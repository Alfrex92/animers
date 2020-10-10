import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import AboutUsStory from "./index"

const story = storiesOf("Molecules | AboutUsStory", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Story section of About Us page
story.add("Component", () => (
  <div>
    <AboutUsStory
      aboutUsStoryTitle={text("Title", `Our Story`)}
      paragraphs={data.aboutUsStory}
    />
  </div>
))
