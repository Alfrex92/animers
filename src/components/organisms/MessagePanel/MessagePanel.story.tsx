import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import MessagePanel from "./index"

const story = storiesOf("Organisms | MessagePanel", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Signup instructions appearing on homepage
story.add("Component", () => (
    <MessagePanel
        blockTitle={text("Block title", "Make Friends!")}
        buttonColor={color("Button color", "#f92b00")}
        textColor={color("Text color", "#ffffff")}
        content={"Don't miss your chance to join the largest anime community in Tokyo"}
        children={text("Button message", "Participate")}
    />
)
)