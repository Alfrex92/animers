import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import MobileNav from "./index"

const label = "Language";
const languageOptions = { ENG: "en", JP: "jp" };
const defaultValue = 'en';
const groupId = 'GROUP-ID1';

const story = storiesOf("Organisms | MobileNav", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Mobile navigation menu
story.add("Component", () => (
    <MobileNav language={select(label, languageOptions, defaultValue, groupId)} emailCTA={data.emailCTA} emailAddress={data.contact.address} socialCTA={data.socialCTA} copyrightContent={data.copyrightContent} />
)
)