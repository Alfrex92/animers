import React from 'react';
import useCodeOfConductTL from "../components/useCodeOfConductTL"
import { graphql } from 'gatsby';
import CodeOfConductPage from "../components/pages/CoCPage"

const query = graphql`
  query useCodeOfConductTL {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            codeOfConduct {
                disclaimer
                greeting
                introduction {
                    parID
                    content
                }
                sections {
                    sectionID
                    sectionTitle
                    subsections {
                        subsectionID
                        type
                        content
                        listItems {
                            listItemID
                            content
                            }
                        }
                    }
                }
                contact {
                  id
                  type
                  address
                }
                events {
                date
                dateNoDay
                eventID
                location
                time
                title
                }
                language
                logoUrl
                menu {
                  id
                  title
                  slug
                }
                copyrightContent
                emailCTA
                socialCTA
            }
        }
    }
  }
}
`


const CodeOfConduct = () => {
    const { codeOfConduct, contact, copyrightContent, events, language, logoUrl, menu, emailCTA, socialCTA } = useCodeOfConductTL();
    return (
        <CodeOfConductPage 
            nextEventBannerProps={{textContent: "Next Event", dateContent: `${events[0].date}`, buttonProps: {buttonColor: "#ffffff", textColor: "#f92b00", children: "Attend", hasBorder: false}}} 
            desktopNavProps={{languageOption: language, logoProps: logoUrl, buttonProps: {buttonColor: "#f92b00", textColor: "#ffffff", children: "Participate", hasBorder: false}, navMenuProps: {links: menu}}}
            disclaimer={codeOfConduct.disclaimer} greeting={codeOfConduct.greeting} introduction={codeOfConduct.introduction} sections={codeOfConduct.sections} 
            emailAddress={contact.address} emailMessage={emailCTA} socialMessage={socialCTA} copyrightContent={copyrightContent}
            mobileHeaderProps={{pageTitle: menu[3].title}}
        />
    )

}

export default CodeOfConduct