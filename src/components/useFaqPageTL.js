import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "./layout"


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

const useFaqPageTL = () => {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext)
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    }
  })

  // Only return translations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0]

  return translations
}

export default useFaqPageTL
