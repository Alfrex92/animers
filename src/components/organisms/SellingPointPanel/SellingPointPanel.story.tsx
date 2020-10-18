import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"


import SellingPointPanel from "./index"

const story = storiesOf("Organisms | SellingPointPanel", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Selling points on homepage
story.add("Component", () => (
    <SellingPointPanel
        blockTitle={text("Block title", "The Best Part of Animers")}
        buttonColor={color("Button color", "#f92b00")}
        textColor={color("Text color", "#ffffff")}
        hasBorder={boolean("Button border?", false)}
        children={text("Button message", "Join Now")}
        bulletPoints={data.sellingPoints}
    />
)
)