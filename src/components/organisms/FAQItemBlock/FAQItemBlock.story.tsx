import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import FAQBlock from "./index"

const eventFAQs = data.faqs.filter(item => item.category === "events");
const covidFAQs = data.faqs.filter(item => item.category === "covid19");
const drinkFAQs = data.faqs.filter(item => item.category === "drinks");

const homepageBlock = [eventFAQs[0], covidFAQs[0], drinkFAQs[0]];

const story = storiesOf("Organisms | FAQBlock", module)
    .addDecorator(withInfo)
// Blocks of FAQ items (separated by categories) for FAQ page
story.add("Events", () => (
    <FAQBlock blockLabelContent={"About Events"} faqItemList={eventFAQs} />
))
story.add("COVID-19", () => (
    <FAQBlock blockLabelContent={"About COVID-19"} faqItemList={covidFAQs} />
))
story.add("Drinks", () => (
    <FAQBlock blockLabelContent={"About Drinks"} faqItemList={drinkFAQs} />
))
story.add("HomepageBlock", () => (
    <FAQBlock blockLabelContent={"FAQs"} faqItemList={homepageBlock} />
))