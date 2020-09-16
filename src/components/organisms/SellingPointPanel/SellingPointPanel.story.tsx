import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import SellingPointPanel from "./index"

const story = storiesOf("Organisms | SellingPointPanel", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Selling points on homepage
story.add("Component", () => (
    <SellingPointPanel
        blockTitle={text("Block title", "The Best Part of Animers")}
        buttonColor={"redWhite"}
        children={text("Button message", "Join Now")}
    />
)
)