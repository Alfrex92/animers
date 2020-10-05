import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import data from "../../../../config/translations/en.json"

import CoCPage from "./index"

const story = storiesOf("Pages | CoCPage", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// Code of Conduct Page
story.add("Component", () => (
  <CoCPage
    emailAddress={text("Email address", "x@x.com")}
    emailMessage={text("Email Message", "Get in Touch")}
    socialMessage={text("Social Message", "Follow Us")}
    copyrightContent={text("Copyright content", "Copyright blablabla")}
    disclaimer={data.codeOfConduct.disclaimer}
    greeting={data.codeOfConduct.greeting}
    introduction={data.codeOfConduct.introduction}
    sections={data.codeOfConduct.sections}
  />
))
