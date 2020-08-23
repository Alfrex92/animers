import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import FooterSNSIcons from "./index"

const story = storiesOf("Molecules | FooterSNSIcons", module)
    .addDecorator(withInfo)
// SNS icon for footer organism
story.add("Component", () => (
    <FooterSNSIcons />
))
