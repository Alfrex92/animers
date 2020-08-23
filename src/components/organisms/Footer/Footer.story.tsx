import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import translationEn from "../../../../config/translations/en.json";
const siteEmailAddress = translationEn.contact[0].address;
const copyrightContent = translationEn.copyrightContent;

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