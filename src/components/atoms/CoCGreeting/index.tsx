import React from "react"
import { StyleCoCGreetingWrapper, StyleCoCGreetingContent } from "./styles"

interface CoCGreetingInterface {
  greetingContent: string
}

const CoCGreeting: React.FC<CoCGreetingInterface> = (
  props: CoCGreetingInterface
) => {
  return (
    <StyleCoCGreetingWrapper>
      <StyleCoCGreetingContent>{props.greetingContent}</StyleCoCGreetingContent>
    </StyleCoCGreetingWrapper>
  )
}

export default CoCGreeting
