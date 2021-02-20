import React from "react"
import { storiesOf } from "@storybook/react"
import { text, withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import AboutUsContent from "./index"

const sectionsArr = [data.aboutUs[0], data.aboutUs[1]]

const story = storiesOf("Organism | AboutUsContent", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// About Us page content
story.add("Component", () => (
  <div>
    <AboutUsContent
      aboutUsSections={sectionsArr}
      aboutUsStory={data.aboutUsStory}
      aboutUsStoryTitle={data.aboutUsStoryTitle}
      memberProps={{
        sectionTitle: text("Member section title", "Our Team"),
        memberInfoArray: data.team
      }}
    />
  </div>
))
