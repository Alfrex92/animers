import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import data from "../../../../config/translations/en.json";

const eventFAQs = data.faqs.filter(item => item.category === "events");
const covidFAQs = data.faqs.filter(item => item.category === "covid19");
const drinkFAQs = data.faqs.filter(item => item.category === "drinks");
const blockLabelList = ["About Events", "About COVID-19", "About Drinks"];
const FAQBlockList = [eventFAQs, covidFAQs, drinkFAQs];

import FAQPage from "./index"

const story = storiesOf("Pages | FAQPage", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Mobile navigation menu
story.add("Component", () => (
    <FAQPage
        blockLabelList={blockLabelList}
        emailAddress={data.contact.address}
        emailMessage={text("Email Message", "Get in Touch")}
        socialMessage={text("Social Message", "Follow Us")}
        copyrightContent={data.copyrightContent}
        sectionTitle={text("Section title", "FAQs")}
        faqBlockList={FAQBlockList}
    />
)
)