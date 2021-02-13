import React from "react"
import useFaqPageTL from "../components/useFaqPageTL"
import { graphql } from 'gatsby';
import FAQPage from "../components/pages/FAQPage"

const query = graphql`
  query useFaqPageTL {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            hello
            subline
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
            copyrightContent
            logoUrl
            language
            menu {
              id
              title
              slug
            }
            backToHome
            faqs {
              section
              sectionID
              questions {
                id
                question
                answer
              }
            }
            upcomingEvent {
                buttonContent
                label
                linkContent
            }
            emailCTA
            socialCTA
          }
        }
      }
    }
  }
`

const FAQ = () => {
    const { contact, events, copyrightContent, logoUrl, language, menu, backToHome, faqs, emailCTA, socialCTA, upcomingEvent } = useFaqPageTL();
    return (
        <FAQPage 
            nextEventBannerProps={{textContent: "Next Event", dateContent: `${events[0].date}`, buttonProps: {buttonColor: "#ffffff", textColor: "#f92b00", children: "Attend", hasBorder: false}}} 
            emailAddress={contact.address} emailMessage={emailCTA} socialMessage={socialCTA} copyrightContent={copyrightContent}
            desktopNavProps={{languageOption: language, logoProps: logoUrl, buttonProps: {buttonColor: "#f92b00", textColor: "#ffffff", children: "Participate", hasBorder: false}, navMenuProps: {links: menu}}}
            mobileHeaderProps={{pageTitle: menu[2].title}}
            faqList={faqs}
        />
    )
}

export default FAQ