import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import translationsEn from "../../../../config/translations/en.json"

import Copyright from "./index"

const footerContent = translationsEn.copyrightContent;

const story = storiesOf("Atoms | Copyright", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Email CTA message for footer
story.add("Component", () => (
    <div>
        <Copyright content={text("Content", `${footerContent}`)} />
    </div>
))