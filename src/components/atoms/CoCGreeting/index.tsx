import React from 'react'
import { StyleCoCGreetingWrapper, StyleCoCGreetingContent } from "./styles"

interface CoCGreetingInterface {
    content: string;
}

const CoCGreeting: React.FC<CoCGreetingInterface> = (
    props: CoCGreetingInterface
) => {
    return (
        <StyleCoCGreetingWrapper>
            <StyleCoCGreetingContent>{props.content}</StyleCoCGreetingContent>
        </StyleCoCGreetingWrapper>
    )
}

export default CoCGreeting