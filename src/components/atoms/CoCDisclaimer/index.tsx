import React from 'react'
import { StyleDisclaimerWrapper, StyleDisclaimerContent } from "./styles"

interface CoCDisclaimerInterface {
    content: string;
}

const CoCDisclaimer: React.FC<CoCDisclaimerInterface> = (
    props: CoCDisclaimerInterface
) => {
    return (
        <StyleDisclaimerWrapper>
            <StyleDisclaimerContent>{props.content}</StyleDisclaimerContent>
        </StyleDisclaimerWrapper>
    )
}

export default CoCDisclaimer