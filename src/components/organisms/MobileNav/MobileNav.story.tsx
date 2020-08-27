import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import MobileNav from "./index"

const importedProps = {
    emailMessage: data.emailCTA,
    emailAddress: data.contact.address,
    socialMessage: data.socialCTA,
    copyrightContent: data.copyrightContent
}

import MobileNavMenu from "./index"

const story = storiesOf("Organisms | MobileNav", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Mobile navigation menu
story.add("Component", () => (
    <MobileNav />
)
)