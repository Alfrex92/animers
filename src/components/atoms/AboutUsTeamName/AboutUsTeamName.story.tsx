import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import AboutUsTeamMemberName from "./index"

const story = storiesOf("Atoms | AboutUsTeamMemberName", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Name of member(s) of Animers team
story.add("Component", () => (
    <AboutUsTeamMemberName  memberName= {text("Title content", `${data.team[0].name}`)}/>
))
