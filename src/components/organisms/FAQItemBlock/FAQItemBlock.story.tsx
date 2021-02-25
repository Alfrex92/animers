import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import FAQItemBlock from "./index"

const eventFAQs = data.faqs[0];
const covidFAQs = data.faqs[1];
const drinkFAQs = data.faqs[2];

const homepageBlock = { section: "FAQs", sectionID: "sec000", questions: [eventFAQs.questions[0], covidFAQs.questions[0], drinkFAQs.questions[0]] };

const story = storiesOf("Organisms | FAQBlock", module)
    .addDecorator(withInfo)
// Blocks of FAQ items (separated by categories) for FAQ page
story.add("Events", () => (
    <FAQItemBlock section={eventFAQs.section} sectionID={eventFAQs.sectionID}  questions={eventFAQs.questions} />
))
story.add("COVID-19", () => (
    <FAQItemBlock section={covidFAQs.section} sectionID={covidFAQs.sectionID} questions={covidFAQs.questions} />
))
story.add("Drinks", () => (
    <FAQItemBlock section={drinkFAQs.section} sectionID={drinkFAQs.sectionID} questions={drinkFAQs.questions} />
))
story.add("HomepageBlock", () => (
    <FAQItemBlock section={homepageBlock.section} sectionID={homepageBlock.sectionID} questions={homepageBlock.questions} />
))