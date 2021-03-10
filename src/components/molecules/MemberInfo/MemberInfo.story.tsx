import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import MemberInfo from "./index"
import { domainUrl } from "../../../constants/others"

const memberImg = `${domainUrl}alfred.jpg`

const story = storiesOf("Molecules|MemberInfo", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// imagesbutton
story.add("Component", () => (

    <MemberInfo
      id={text("memberID", `${data.team[0].id}`)}
      image={text("Image", `${data.team[0].image}`)}
      name={text("Name", `${data.team[0].name}`)}
      description={text("Description", `${data.team[0].description}`)}
      role={text("Role", `${data.team[0].role}`)}
      sns={data.team[0].sns}
    />

))
