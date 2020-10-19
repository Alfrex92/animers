import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import heroLrg from "../../../images/heroLrg.jpg" // @@@ Can't make this load properly. Any ideas?

import HeroImage from "./index"


const story = storiesOf("Molecules | HeroImage", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Hero image
story.add("Component", () => (
  <div style={{ maxWidth: "500px" }}>
    <HeroImage
      image={text("Image", heroLrg)}
      alt={text("Alt", "Animers")}
    />
  </div>
))