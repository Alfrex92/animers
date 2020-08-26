import React from 'react'
import { StyleCTASocialWrapper, StyleCTASocialMessage } from "./styles"

interface CTASocialInterface {
    message: string,
}

const CTASocial: React.FC<CTASocialInterface> = (
    props: CTASocialInterface
) => {
    return (
        <StyleCTASocialWrapper>
            <StyleCTASocialMessage>{props.message}</StyleCTASocialMessage>
        </StyleCTASocialWrapper>
    )
}

export default CTASocial
