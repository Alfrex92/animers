import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import translationsEn from "../../../../config/translations/en.json"

import CTASocial from "./index"

const emailAddress = translationsEn.contact[0].address

const story = storiesOf("Molecules | CTASocial", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Email CTA message for footer
story.add("Component", () => (
    <div>
        <CTASocial message={text("Message", "Follow Us")} />
    </div>
))