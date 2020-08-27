import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import data from "../../../../config/translations/en.json";
const siteEmailAddress = data.contact?.address;
const copyrightContent = data.copyrightContent;

import MobileNavMenu from "./index"

const story = storiesOf("Pages | MobileNavMenu", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Mobile navigation menu
story.add("Component", () => (
    <MobileNavMenu
        open={false}
        emailMessage={"Get in Touch "}
        emailAddress={siteEmailAddress}
        socialMessage={"Follow Us"}
        copyrightContent={copyrightContent}
    />
)
)