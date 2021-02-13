import React from "react"
import { StyleQuoteContainer, StyleQuoteContent } from "./styles"

interface AboutFeaturedQuoteInterface {
  content: string | undefined
}

const AboutFeaturedQuote: React.FC<AboutFeaturedQuoteInterface> = (
  props: AboutFeaturedQuoteInterface
) => {
  return (
    <StyleQuoteContainer>
      <StyleQuoteContent>{props.content}</StyleQuoteContent>
    </StyleQuoteContainer>
  )
}

export default AboutFeaturedQuote
