import React from 'react'
import { StyleFAQBlock } from "./styles"
import FAQItem from "../../molecules/FAQItem"
import FAQCategoryLabel from "../../atoms/FAQCategoryLabel"


interface FAQItemBlockInterface {
    section: string;
    sectionID: string;
    faqQuestions: FAQItemInterface[];
}

interface FAQItemInterface {
    question: string;
    answer: string;
    itemID: string;
}

const FAQItemBlock: React.FC<FAQItemBlockInterface> = (props: FAQItemBlockInterface) => {
    return (
        <StyleFAQBlock>
            <FAQCategoryLabel content={props.section} />
            {props.faqQuestions.map((item) => (
                <FAQItem question={item.question} answer={item.answer} itemID={item.itemID} key={`${item.itemID}` + Math.random()}/>
            ))}
        </StyleFAQBlock>
    )
}

export default FAQItemBlock
