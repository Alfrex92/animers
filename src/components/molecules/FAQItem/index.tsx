import React from 'react'
import { StyleFAQItemWrapper, StyleFAQQuestion, StyleFAQAnswer } from "./styles"

interface FAQItemInterface {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemInterface> = (
    props: FAQItemInterface
) => {
    const [open, setOpen] = React.useState(false);
    return (
        <StyleFAQItemWrapper onClick={() => setOpen((oldProps) => !oldProps)} open={open}>
            <StyleFAQQuestion>{props.question}</StyleFAQQuestion>
            <StyleFAQAnswer open={open}><span>{props.answer}</span></StyleFAQAnswer>
        </StyleFAQItemWrapper>
    )
}

export default FAQItem
