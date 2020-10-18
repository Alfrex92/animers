import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import BulletPointList from "./index"

const story = storiesOf("Molecules | BulletPointList", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Bullet point list of 'Selling points' on homepage
story.add("Component", () => (
    <div>
        <BulletPointList />
    </div>
))