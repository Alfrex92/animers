import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import SignupPanel from "./index"

const story = storiesOf("Organisms | SignupPanel", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Signup instructions appearing on homepage
story.add("Component", () => (
    <SignupPanel
        blockTitle={text("Block title", "Your adventure starts here!")}
        buttonColor={"redWhite"}
        children={text("Button message", "Join Us")}
    />
)
)