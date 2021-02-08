import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import CoCContent from "./index"
const aaaa = data.codeOfConduct.sections
console.log(aaaa)
const story = storiesOf("Organisms | CoCContent", module).addDecorator(withInfo)

// Blocks of FAQ items (separated by categories) for FAQ page
story.add("Component", () => (
  <CoCContent
    disclaimer={data.codeOfConduct.disclaimer}
    greeting={data.codeOfConduct.greeting}
    introduction={data.codeOfConduct.introduction}
    sections={data.codeOfConduct.sections}
  />
))
