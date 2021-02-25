import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import BulletPointList from "./index"


const story = storiesOf("Molecules | BulletPointList", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Bullet point list of 'Selling points' on homepage
story.add("Component", () => (
    <div>
        <BulletPointList bulletPoints={data.sellingPoints}/>
    </div>
))