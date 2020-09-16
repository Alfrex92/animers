import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import BulletPoint from "./index"

const story = storiesOf("Molecules | BulletPoint", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// 'Selling point' list items on homepage
story.add("Component", () => (
    <div>
        <BulletPoint content={text("Content", "Meet other anime and manga fans")} />
    </div>
))