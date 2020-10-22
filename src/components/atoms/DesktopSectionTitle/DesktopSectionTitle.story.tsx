import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import DesktopSectionTitle from "./index"

const story = storiesOf("Atoms | DesktopSectionTitle", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Page/Section title visible on med size screens and larger
story.add("Component", () => (
    <div>
        <DesktopSectionTitle title={text("Section title", "FAQs")} />
    </div>
))