import React, { useState } from 'react'
import { StyleFAQBlock } from "./styles"
import FAQItem from "../../molecules/FAQItem"
import FAQCategoryLabel from "../../atoms/FAQCategoryLabel"
import data from "../../../../config/translations/en.json"

interface FAQItemBlockInterface {
    blockLabelContent: string;
    faqItemList: FAQItemInterface[];
}

interface FAQItemInterface {
    question: string;
    answer: string;
}

const eventFAQs = data.faqs.filter(item => item.category === "events");
const covidFAQs = data.faqs.filter(item => item.category === "covid19");
const drinkFAQs = data.faqs.filter(item => item.category === "drinks");

const homepageBlock = [eventFAQs[0], covidFAQs[0], drinkFAQs[0]];

const FAQItemBlock: React.FC<FAQItemBlockInterface> = (props: FAQItemBlockInterface) => {
    return (
        <StyleFAQBlock>
            <FAQCategoryLabel content={props.blockLabelContent} />
            {props.faqItemList.map(item => (
                <FAQItem question={item.question} answer={item.answer} />
            ))}
        </StyleFAQBlock>
    )
}

export default FAQItemBlock
