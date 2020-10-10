import React from "react"
import {
  StyleAboutUsStoryWrapper,
  StyleBasicParagraph,
  StyleFeatureQuotePink,
} from "./styles"

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
      <h3>{props.aboutUsStoryTitle}</h3>
      {props.paragraphs?.map(paragraph =>
        paragraph.isFeaturedQuote === false ? (
          <StyleBasicParagraph key={paragraph.parID}>
            {paragraph.content}
          </StyleBasicParagraph>
        ) : (
          <StyleFeatureQuotePink key={paragraph.parID}>
            {paragraph.content}
          </StyleFeatureQuotePink>
        )
      )}
    </StyleAboutUsStoryWrapper>
  )
}

export default AboutUsStory
