import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import DesktopNav from "./index"

const story = storiesOf("Organisms | DesktopNav", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)

// Desktop nav
story.add("Component", () => (
    <div style={{ width: "50px" }}>
        <DesktopNav languageOption={text("Language", "English")}
            buttonProps={{
                buttonColor:color("Button color", "#ffffff"), textColor:color("Text color", "#f92b00"),
                hasBorder: boolean("Button border?", false), children: text("Button message", "Join Now")
            }}
            navMenuProps={{links: data.menu}}
        
        />
    </div>
))