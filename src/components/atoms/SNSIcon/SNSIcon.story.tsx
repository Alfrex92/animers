import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"

import SNSIcon from "./index"

const story = storiesOf("Atoms | SNS-Icon", module)
    .addDecorator(withInfo)
// SNS icon for footer organism
story.add("Facebook", () => (
    <div style={{ width: "110px", display: "flex", justifyContent: "space-between" }}>
        <SNSIcon serviceName={"facebook"} />
    </div>
))
story.add("Instagram", () => (
    <div style={{ width: "110px", display: "flex", justifyContent: "space-between" }}>
        <SNSIcon serviceName={"instagram"} />
    </div>
))
story.add("Meetup", () => (
    <div style={{ width: "110px", display: "flex", justifyContent: "space-between" }}>
        <SNSIcon serviceName={"meetup"} />
    </div>
))