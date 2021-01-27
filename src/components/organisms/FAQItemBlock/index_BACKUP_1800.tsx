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
<<<<<<< HEAD
            {props.faqQuestions.map((item) => (
                <FAQItem question={item.question} answer={item.answer} itemID={item.itemID} key={`${item.itemID}` + Math.random()}/>
=======
            {props.questions.map(item => (
                <FAQItem question={item.question} answer={item.answer} key={item.id} />
>>>>>>> karl/CodeOfConduct
            ))}
        </StyleFAQBlock>
    )
}

export default FAQItemBlock
