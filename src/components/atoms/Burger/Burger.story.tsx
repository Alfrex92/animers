import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import BurgerIcon from "./index"

const story = storiesOf("Atoms | BurgerIcon", module)
    .addDecorator(withInfo)
// Burger icon ( X ) for mobile navigation menu
story.add("Closed", () => (
    <div style={{ width: "50px" }}>
        <BurgerIcon open={false} />
    </div>
))

story.add("Open", () => (
    <div style={{ width: "50px" }}>
        <BurgerIcon open={true} />
    </div>
))