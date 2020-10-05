import React from "react"
import { StyledCoCPageWrapper } from "./styles"
import CoCContent from "../../organisms/CoCContent"
import Footer from "../../organisms/Footer"

interface CoCPageInterface {
  disclaimer: string
  greeting: string
  introduction: IntroductionInterface[]
  sections: SectionInterface[]
  emailMessage: string
  emailAddress: string
  socialMessage: string
  copyrightContent: string
}
interface IntroductionInterface {
  parID: string
  content: string
}

interface SectionInterface {
  sectionID: string
  sectionTitle: string
  subsections: SubsectionInterface[]
}

interface SubsectionInterface {
  subsectionID: string
  type: string
  content: string | null
  listItems: ListItemsInterface[] | null
}

interface ListItemsInterface {
  listItemID: string
  content: string
}

const CoCPage: React.FC<CoCPageInterface> = (props: CoCPageInterface) => {
  return (
    <StyledCoCPageWrapper>
      <CoCContent
        disclaimer={props.disclaimer}
        greeting={props.greeting}
        introduction={props.introduction}
        sections={props.sections}
      />
      <Footer
        emailMessage={props.emailMessage}
        emailAddress={props.emailAddress}
        socialMessage={props.socialMessage}
        copyrightContent={props.copyrightContent}
      />
    </StyledCoCPageWrapper>
  )
}

export default CoCPage
