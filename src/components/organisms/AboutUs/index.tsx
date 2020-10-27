import React from "react"
import { StyleAboutUsOrganismWrapper } from "./styles"
import MemberInfoFull from "../../molecules/MemberInfoFull"
import AboutSectionBlock from "../../molecules/AboutSectionBlock"
import AboutUsStory from "../../molecules/AboutUsStory"
import AboutSectionTitle from "../../atoms/AboutSectionTitle"

interface AboutUsContentInterface {
  aboutUsSections: AboutSectionBlockInterface[];
  aboutUsStory: AboutUsStoryBlockInterface[];
  aboutUsStoryTitle: string;
  memberProps: MemberInfoFullInterface; 
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

interface MemberInfoFullInterface {
  sectionTitle: string;
  memberInfoArray: MemberInfoInterface[];
}

interface MemberInfoInterface {
  id: string;
  name: string;
  role: string;
  image: string;
  sns: {
    service: string;
    url: string;
  }[]
  description: string;
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
      <MemberInfoFull sectionTitle={props.memberProps.sectionTitle} memberInfoArray={props.memberProps.memberInfoArray}/>
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
