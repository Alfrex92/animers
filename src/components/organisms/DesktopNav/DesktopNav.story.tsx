import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import DesktopNav from "./index"

const story = storiesOf("Organisms | DesktopNav", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)

// Desktop nav
story.add("Component", () => (
    <div style={{ width: "50px" }}>
        <DesktopNav languageOption={text("Language", "English")} buttonText={text("Button text", "Join Us")} buttonColor={text("Button color", "basic")} />
    </div>
))