import React, { useState } from 'react'
import { StyleFAQItemWrapper, StyleFAQQuestion, StyleFAQAnswer } from "./styles"

interface FAQItemInterface {
    question: string;
    answer: string;
    open: boolean;
    setOpen: Function;
}

const FAQItem: React.FC<FAQItemInterface> = (
    props: FAQItemInterface
) => {
    const [open, setOpen] = useState(false);
    return (
        <StyleFAQItemWrapper onClick={() => setOpen(!open)}>
            <StyleFAQQuestion>{props.question}</StyleFAQQuestion>
            <StyleFAQAnswer open={open}><span>{props.answer}</span></StyleFAQAnswer>
        </StyleFAQItemWrapper>
    )
}

export default FAQItem
