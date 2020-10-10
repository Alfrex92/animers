import React from "react"
import {
  StyleAboutUsStoryWrapper,
  StyleBasicParagraph,
  StyleFeatureQuote,
  StyleFeatureQuotePink,
} from "./styles"
import AboutSectionTitle from "../../atoms/AboutSectionTitle"

interface AboutUsStoryInterface {
  aboutUsStoryTitle: string
  paragraphs: AboutUsStoryBlockInterface[]
}

interface AboutUsStoryBlockInterface {
  parID: string
  content: string
  isFeaturedQuote: boolean
}

const AboutUsStory: React.FC<AboutUsStoryInterface> = (
  props: AboutUsStoryInterface
) => {
  return (
    <StyleAboutUsStoryWrapper>
      <AboutSectionTitle content={props.aboutUsStoryTitle} />
      {props.paragraphs?.map(paragraph => {
        if (paragraph.parID === "about-003-par-005") {
          return (
            <StyleFeatureQuotePink>{paragraph.content}</StyleFeatureQuotePink>
          )
        } else if (paragraph.isFeaturedQuote === true) {
          return <StyleFeatureQuote>{paragraph.content}</StyleFeatureQuote>
        } else {
          return <StyleBasicParagraph>{paragraph.content}</StyleBasicParagraph>
        }
      })}
    </StyleAboutUsStoryWrapper>
  )
}

export default AboutUsStory
