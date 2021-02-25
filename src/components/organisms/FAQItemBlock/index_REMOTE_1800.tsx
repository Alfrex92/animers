import React from 'react'
import { StyleFAQBlock } from "./styles"
import FAQItem from "../../molecules/FAQItem"
import FAQCategoryLabel from "../../atoms/FAQCategoryLabel"


interface FAQItemBlockInterface {
    section: string;
    sectionID: string;
    questions: FAQItemInterface[];
}

interface FAQItemInterface {
    question: string;
    answer: string;
}

const FAQItemBlock: React.FC<FAQItemBlockInterface> = (props: FAQItemBlockInterface) => {
    return (
        <StyleFAQBlock>
            <FAQCategoryLabel content={props.section} />
            {props.questions.map(item => (
                <FAQItem question={item.question} answer={item.answer} key={item.id} />
            ))}
        </StyleFAQBlock>
    )
}

export default FAQItemBlock
