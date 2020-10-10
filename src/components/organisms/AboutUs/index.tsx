import React from "react"
import { StyleAboutUsOrganismWrapper } from "./styles"
import AboutSectionBlock from "../../molecules/AboutSectionBlock"
import AboutUsStory from "../../molecules/AboutUsStory"
import AboutSectionTitle from "../../atoms/AboutSectionTitle"

interface AboutUsContentInterface {
  aboutUsSections: AboutSectionBlockInterface[]
  aboutUsStory: AboutUsStoryBlockInterface[]
  aboutUsStoryTitle: string
}

interface AboutSectionBlockInterface {
  sectionTitle: string
  content: string | null
}

interface AboutUsStoryBlockInterface {
  parID: string
  content: string
  isFeaturedQuote: boolean
}

const AboutUsContent: React.FC<AboutUsContentInterface> = (
  props: AboutUsContentInterface
) => {
  return (
    <StyleAboutUsOrganismWrapper>
      <AboutSectionBlock
        title={props.aboutUsSections[0].sectionTitle}
        text={props.aboutUsSections[0].content}
      />
      <div>
        <AboutSectionTitle content={"The Team"} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          deleniti nam debitis esse minus commodi eum, sed, ipsa ipsum,
          voluptates porro veniam impedit? Corrupti maxime illo voluptatem
          minima sit quaerat?
        </p>
      </div>
      <AboutSectionBlock
        title={props.aboutUsSections[1].sectionTitle}
        text={props.aboutUsSections[1].content}
      />
      <AboutUsStory
        aboutUsStoryTitle={props.aboutUsStoryTitle}
        paragraphs={props.aboutUsStory}
      />
    </StyleAboutUsOrganismWrapper>
  )
}

export default AboutUsContent
