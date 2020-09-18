import React, { useState } from 'react'
import { StyleFAQBlock } from "./styles"
import FAQItem from "../../molecules/FAQItem"
import data from "../../../../config/translations/en.json"

const eventFAQs = data.faqs.filter(item => item.category === "events");
const covidFAQs = data.faqs.filter(item => item.category === "covid19");
const drinkFAQs = data.faqs.filter(item => item.category === "drinks");

const homepageBlock = [eventFAQs[0], covidFAQs[0], drinkFAQs[0]];
console.log(homepageBlock)

const FAQItemBlock: React.FC = () => {
    return (
        <StyleFAQBlock>
            {homepageBlock.map(item => (
                <FAQItem question={item.question} answer={item.answer} />
            ))}
        </StyleFAQBlock>
    )
}

export default FAQItemBlock
