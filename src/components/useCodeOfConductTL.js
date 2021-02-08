import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "./layout"


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

const useCodeOfConductTL = () => {
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

export default useCodeOfConductTL
