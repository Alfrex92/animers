import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import LanguageOption from "./index"

const story = storiesOf("Atoms | LanguageOption", module)
    .addDecorator(withInfo)

// Animers logo 
story.add("English", () => (
    <div style={{ width: "50px" }}>
        <LanguageOption language={"English"} />
    </div>
))

story.add("Japanese", () => (
    <div style={{ width: "50px" }}>
        <LanguageOption language={"日本語"} />
    </div>
))