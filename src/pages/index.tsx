import React from "react"
import useHomepageTL from "../components/useHomepageTL"
import { graphql } from 'gatsby';
import Homepage from "../components/pages/Homepage"



const query = graphql`
  query useTranslations {
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
            copyrightContent
            gallery {
              id
              url
              alt
            }
            heroImages {
              imageID
              src
              alt
            }
            language
            logoUrl
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
            sellingPoints {
              id
              content
            }
            signupSteps {
              id
              stepNum
              title
              subtitle
            }
            emailCTA
            events {
                date
                dateNoDay
                eventID
                location
                time
                title
            }
            socialCTA
          }
        }
      }
    }
  }
`
const Index = () => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { contact, copyrightContent, emailCTA, gallery, heroImages, language, menu, upcomingEvent, logoUrl, events, faqs, sellingPoints, signupSteps, socialCTA } = useHomepageTL()
  
  const questions = [faqs[0].questions[0], faqs[1].questions[0], faqs[2].questions[0]]
  return (
    <Homepage 
      bannerProps={{textContent: "Next Event", dateContent: `${events[0].date}`, buttonProps: {buttonColor: "#ffffff", textColor: "#f92b00", children: "Attend", hasBorder: false}}} 
      mobileNavProps={{language: language, logoProps: logoUrl, emailCTA: emailCTA, emailAddress: contact.address, socialCTA: socialCTA, copyrightContent: copyrightContent, mobileNavLinks: menu}}
      desktopNavProps={{languageOption: language, logoProps: logoUrl, buttonProps: {buttonColor: "#f92b00", textColor: "#ffffff", children: "Participate", hasBorder: false}, navMenuProps: {links: menu}}}
      buttonProps={{buttonColor: "#f92b00", textColor: "#ffffff", hasBorder: false, children: "Join Now"}}
      heroProps={{image: heroImages[1].src, alt: heroImages[1].alt, heroMessageProps: {textContent: "Meet Anime and Manga Fans Like You in Tokyo", buttonProps: {buttonColor: "#ffffff", textColor: "#f92b00", children: "Join Now", hasBorder: false}}}}
      upcomingEventBlock={{upcomingEventContent: "Upcoming Event", linkContent: "See all", eventTitle: `${events[0].title}`, eventDateTime: {date: `${events[0].date}`, time: `${events[0].time}`, location: `${events[0].location}`}, button: {buttonColor: "#ffffff", textColor: "#f92b00", children: "Attend", hasBorder: false}}}
      desktopBlockTitle={"Upcoming Event"}
      desktopCountdownContent={"in 5 days and 6 hours"} // @@@ Make this dynamic
      signupPanelProps={{blockTitle: "Your adventure starts here!", buttonProps: {buttonColor: "#f92b00", hasBorder: false, textColor: "#fff", children: "Join Us"}, signUpSteps:signupSteps}}
      sellingPointPanelProps={{ blockTitle: "The Best Part of Animers", buttonProps: {buttonColor: "#f92b00", textColor: "#ffffff", hasBorder: false, children: "Join Now"}, bulletPoints: sellingPoints}}
      faqProps={{section: "FAQs", sectionID: "sec000", faqQuestions: questions}}
      messagePanelProps={{blockTitle: "Make Friends!", buttonProps: {buttonColor: "#f92b00", textColor: "#ffffff", children: "Participate", hasBorder: false}, content: "Don't miss your chance to join the largest anime community in Tokyo"}}
      imageGalleryProps={{images: gallery}}
      footerProps={{emailMessage: "Get in Touch ", emailAddress: contact.address, socialMessage: "Follow Us", copyrightContent: copyrightContent}}
    />
  )
}

export default Index

