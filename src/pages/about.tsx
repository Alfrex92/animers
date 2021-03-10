import React from 'react';
import useAboutUsTL from "../components/useAboutUsTL";
import { graphql } from 'gatsby';
import AboutUsPage from "../components/pages/AboutUsPage";


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
                upcomingEvent {
                  buttonContent
                  label
                  linkContent
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

const AboutUs = () => {
    const {aboutUs, aboutUsTeamTitle, aboutUsStoryTitle, aboutUsStory, contact, copyrightContent, events, language, logoUrl, menu, team, upcomingEvent, emailCTA, socialCTA} = useAboutUsTL();

    return (
        <AboutUsPage 
            aboutUsContent={{aboutUsSections: aboutUs, aboutUsStory: aboutUsStory, aboutUsStoryTitle: aboutUsStoryTitle, 
                memberProps: {sectionTitle: aboutUsTeamTitle, memberInfoArray: team}
            }}
            buttonProps={{buttonColor: "#fff", textColor: "#0d89eb", children: "Participate", hasBorder: true}}
            footerProps={{emailMessage: "Get in Touch ", emailAddress: contact.address, socialMessage: "Follow Us", copyrightContent: copyrightContent}}
            nextEventBannerProps={{textContent: "Next Event", dateContent: `${events[0].date}`, buttonProps: {buttonColor: "#ffffff", textColor: "#f92b00", children: "Attend", hasBorder: false}}} 
            mobileHeaderProps={{pageTitle: menu[1].title}}
            desktopNavProps={{languageProps: {language: language, urlSlug: menu[1].slug}, logoProps: logoUrl, buttonProps: {buttonColor: "#f92b00", textColor: "#ffffff", children: "Participate", hasBorder: false}, navMenuProps: {links: menu}}}
        />
    )
}

export default AboutUs;