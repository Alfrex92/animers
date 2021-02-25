import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import data from "../../../../config/translations/en.json";
const siteEmailAddress = data.contact?.address;
const copyrightContent = data.copyrightContent;

import Footer from "./index"

const story = storiesOf("Organisms | Footer", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Mobile navigation menu
story.add("Component", () => (
    <Footer
        emailMessage={"Get in Touch "}
        emailAddress={siteEmailAddress}
        socialMessage={"Follow Us"}
        copyrightContent={copyrightContent}
    />
)
)