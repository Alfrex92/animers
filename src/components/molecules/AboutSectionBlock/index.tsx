import React from "react"
import { StyleSectionBlockContainer } from "./styles"
import AboutSectionTitle from "../../atoms/AboutSectionTitle"

interface AboutSectionBlockInterface {
  title: string
  text: string | null
}

const AboutSectionBlock: React.FC<AboutSectionBlockInterface> = (
  props: AboutSectionBlockInterface
) => {
  return (
    <StyleSectionBlockContainer>
      <AboutSectionTitle content={props.title} />
      <p>{props.text}</p>
    </StyleSectionBlockContainer>
  )
}

export default AboutSectionBlock
