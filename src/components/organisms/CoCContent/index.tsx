import React from "react"
import { StyleCoCContentWrapper, StyleCoCCenteredText } from "./styles"
import CoCDisclaimer from "../../atoms/CoCDisclaimer"
import CoCGreeting from "../../atoms/CoCGreeting"
import CoCSectionTitle from "../../atoms/CoCSectionTitle"
import CoCBoldSubtitle from "../../atoms/CoCBoldSubtitle"
import CoCItemList from "../../molecules/CoCItemList"

interface CoCContentInterface {
  disclaimer: string
  greeting: string
  introduction: IntroductionInterface[]
  sections: SectionInterface[]
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

const CoCContent: React.FC<CoCContentInterface> = (
  props: CoCContentInterface
) => {
  console.log(props)
  return (
    <StyleCoCContentWrapper>
      <CoCDisclaimer disclaimerContent={props.disclaimer} />
      <CoCGreeting greetingContent={props.greeting} />
      <div>
        {props.introduction.map(paragraph => (
          <div key={paragraph.parID}>
            <p>{paragraph.content}</p>
          </div>
        ))}
      </div>
      <div>
        {props.sections.map(section => (
          <div key={section.sectionID}>
            <CoCSectionTitle content={section.sectionTitle}></CoCSectionTitle>
            {section.subsections.map(subsection => (
              <div key={subsection.subsectionID}>
                <div>
                  {subsection.type === "COCBoldSubtitle" && (
                    <CoCBoldSubtitle content={subsection.content} />
                  )}
                  {subsection.type === "p" && <p>{subsection.content}</p>}
                  {subsection.type === "p-centered" && (
                    <StyleCoCCenteredText>
                      {subsection.content}
                    </StyleCoCCenteredText>
                  )}
                  {subsection.listItems && (
                    <CoCItemList itemList={subsection.listItems} />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </StyleCoCContentWrapper>
  )
}

export default CoCContent
