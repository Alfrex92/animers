import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import NextEventBanner from "./index"


const story = storiesOf("Molecules | NextEventBanner", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// 'Next event' banner at top of mobile & desktop sites
story.add("Component", () => (
    <div>
        <NextEventBanner
            textContent={text("Banner message", "Next Event")}
            dateContent={text("Event date", `${data.events[0].date}`)}
            buttonProps={{buttonColor: color("Button color", "#ffffff"), textColor: color("Text color", "#f92b00"), children: text("Message", "Attend"), hasBorder: boolean("Border?", false)}}
        />
    </div>
))