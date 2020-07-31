import React from "react"
import { storiesOf } from "@storybook/react"
import { checkA11y } from "@storybook/addon-a11y"
import { withInfo } from "@storybook/addon-info"

import MemberInfo from "./index"

const story = storiesOf("Components|MemberInfo", module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)

story.add("hEY Component", () => <MemberInfo />)
