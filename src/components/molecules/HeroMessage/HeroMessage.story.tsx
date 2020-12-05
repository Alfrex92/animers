import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import HeroMessage from "./index"

const aaa = data.heroMessage

const story = storiesOf("Molecules | HeroMessage", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Message block of homepage hero component
story.add("Component", () => (
    <div>
        <HeroMessage
            textContent={text("Hero message", `${data.heroMessage}`)}
            buttonProps={{buttonColor: color("Button color", "#ffffff"), textColor: color("Text color", "#f92b00"), children: text("Message", "Join Now"), hasBorder: boolean("Border?", false)}}
        />
    </div>
))