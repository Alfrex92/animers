import React from 'react'
import { StyleFAQCategoryLabelContainer, StyleFAQCategoryLabel } from "./styles"

interface FAQCategoryLabelInterface {
    content: string;
}

const FAQCategory: React.FC<FAQCategoryLabelInterface> = (
    props: FAQCategoryLabelInterface
) => {
    return (
        <StyleFAQCategoryLabelContainer>
            <StyleFAQCategoryLabel>{props.content}</StyleFAQCategoryLabel>
        </StyleFAQCategoryLabelContainer>
    )
}

export default FAQCategory
