import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "./layout"


const query = graphql`
  query useAboutUsTL {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
                aboutUs {
                    sectionID
                    sectionTitle
                    content
                }
                aboutUsTeamTitle
                aboutUsStoryTitle
                aboutUsStory {
                    parID
                    content
                    isFeaturedQuote
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
                team {
                    id
                    name
                    role
                    image
                    sns {
                        service
                        url
                    }
                }
                upcomingEvent {
                    buttonContent
                    label
                    linkContent
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

const useAboutUsTL = () => {
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

export default useAboutUsTL
