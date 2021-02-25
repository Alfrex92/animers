import React from 'react'
import { StyleCTAEmailWrapper, StyleCTAEmailMessage, StyleCTAEmailAddress } from "./styles"

interface CTAEmailInterface {
    message: string,
    address: string
}

const CTAEmail: React.FC<CTAEmailInterface> = (
    props: CTAEmailInterface
) => {
    return (
        <StyleCTAEmailWrapper>
            <StyleCTAEmailMessage>{props.message}</StyleCTAEmailMessage>
            <StyleCTAEmailAddress href="mailto:hello@animers.io?subject=Question from Animers Website" target="_blank" rel="noopener noreferrer">{props.address}</StyleCTAEmailAddress>
        </StyleCTAEmailWrapper>
    )
}

export default CTAEmail
