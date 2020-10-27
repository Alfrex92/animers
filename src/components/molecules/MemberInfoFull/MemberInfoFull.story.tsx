import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import MemberInfoFull from "./index"
import { domainUrl } from "../../../constants/others"

console.log(data.team)

const story = storiesOf("Molecules | MemberInfoFull", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// imagesbutton
story.add("Component", () => (
    <MemberInfoFull 
        sectionTitle={text("Member info section title", "Our Team")}
        memberInfoArray={data.team}
    />
))
