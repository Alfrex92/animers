import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import data from "../../../../config/translations/en.json"

import Hero from "./index"

const story = storiesOf("Organisms | Hero", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
story.add("Hero", () => (
  <div>
    <Hero image={text("Image", data.heroImages[0].src)} alt={text("Alt", data.heroImages[0].alt)} 
        heroMessageProps={{
            textContent: text("Hero message", `${data.heroMessage}`),
            buttonProps: {
                buttonColor: color("Button color", "#ffffff"), textColor: color("Text color", "#f92b00"), children: text("Message", "Join Now"), hasBorder: boolean("Border?", false)
            }
        }}
    />
  </div>
))
story.add("HeroLrg", () => (
    <div>
      <Hero image={text("Image", data.heroImages[1].src)} alt={text("Alt", data.heroImages[1].alt)} 
          heroMessageProps={{
              textContent: text("Hero message", `${data.heroMessage}`),
              buttonProps: {
                  buttonColor: color("Button color", "#ffffff"), textColor: color("Text color", "#f92b00"), children: text("Message", "Join Now"), hasBorder: boolean("Border?", false)
              }
          }}
      />
    </div>
))
