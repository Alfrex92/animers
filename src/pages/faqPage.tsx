import React from 'react'
import { graphql, Link } from "gatsby"
import useTranslations from "../components/useTranslations"
import FAQPageComponent from "../components/pages/FAQPage/index"

const query = graphql`
  query Index {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            hello
            subline
            backToHome
            contact {
              id
              type
              address
            }
            copyrightContent
            emailCTA
            events {
              eventID
              time
              title
              date
              location
            }
            social {
              id
              service
              link
            }
            socialCTA
            upcomingEvent {
              label
              linkContent
              buttonContent
            }
          }
        }
      }
    }
  }
`

const FAQPage = () => {
    const { contact, copyrightContent, emailCTA, faqs, socialCTA } = useTranslations(query)
    return (
        <div>
            <FAQPageComponent 
                emailAddress={contact.address} emailMessage={emailCTA} socialMessage={socialCTA} copyrightContent={copyrightContent} sectionTitle={"FAQs"}
                faqList={faqs}
            />
        </div>
    )
}

export default FAQPage