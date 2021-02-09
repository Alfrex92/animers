import React from 'react'
import { StyleFAQBlock } from "./styles"
import FAQItem from "../../molecules/FAQItem"
import FAQCategoryLabel from "../../atoms/FAQCategoryLabel"


interface FAQItemBlockInterface {
    sectionTitle: string;
    section: string;
    sectionID: string;
    faqQuestions: FAQItemInterface[];
}

interface FAQItemInterface {
    question: string;
    answer: string;
    id: string;
}


const FAQItemBlock: React.FC<FAQItemBlockInterface> = (props: FAQItemBlockInterface) => {
    return (
        <StyleFAQBlock>
            <FAQCategoryLabel content={props.sectionTitle}/>
            {props.faqQuestions.map(item => (
                <FAQItem question={item.question} answer={item.answer} key={item.id}/>
            ))}
        </StyleFAQBlock>
    )
}

export default FAQItemBlock
