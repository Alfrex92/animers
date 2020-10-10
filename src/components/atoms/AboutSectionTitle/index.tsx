import React from "react"
import { StyleSectionContainer, StyleSectionContent } from "./styles"

interface AboutSectionTitleInterface {
  content: string
}

const AboutSectionTitle: React.FC<AboutSectionTitleInterface> = (
  props: AboutSectionTitleInterface
) => {
  return (
    <StyleSectionContainer>
      <StyleSectionContent>{props.content}</StyleSectionContent>
    </StyleSectionContainer>
  )
}

export default AboutSectionTitle
