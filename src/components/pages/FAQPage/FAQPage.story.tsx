import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import data from "../../../../config/translations/en.json";

const eventFAQs = data.faqs[0];
const covidFAQs = data.faqs[1];
const drinkFAQs = data.faqs[2];
const FAQBlockList = [eventFAQs, covidFAQs, drinkFAQs];

import FAQPage from "./index"

const story = storiesOf("Pages | FAQPage", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Mobile navigation menu
story.add("Component", () => (
    <FAQPage
        emailAddress={data.contact.address}
        emailMessage={text("Email Message", "Get in Touch")}
        socialMessage={text("Social Message", "Follow Us")}
        copyrightContent={data.copyrightContent}
        sectionTitle={text("Section title", "FAQs")}
        faqList={FAQBlockList}
    />
)
)