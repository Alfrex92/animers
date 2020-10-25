import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import HeroImage from "./index"


const story = storiesOf("Atoms | HeroImage", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Hero image
story.add("small", () => (
  <div >
    <HeroImage
      image={text("Image", data.heroImages[0].src)}
      alt={text("Alt", data.heroImages[0].alt)}
    />
  </div>
))

story.add("large", () => (
  <div>
    <HeroImage
      image={text("Image", data.heroImages[1].src)}
      alt={text("Alt", data.heroImages[1].alt)}
    />
  </div>
))