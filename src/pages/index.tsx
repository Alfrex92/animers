import React from "react"
import useHomepageTL from "../components/useHomepageTL"
import { graphql } from 'gatsby';
import UpcomingEventPanel from "../components/organisms/UpcomingEventPanel"
import SignupPanel from "../components/organisms/SignupPanel"
import SalesPointPanel from "../components/organisms/SellingPointPanel"
import FAQCategoryLabel from "../components/atoms/FAQCategoryLabel"
import FAQItemBlock from "../components/organisms/FAQItemBlock"



const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            hello
            subline
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
            events {
                date
                dateNoDay
                eventID
                location
                time
                title
            }
          }
        }
      }
    }
  }
`
const Index = () => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { upcomingEvent, events, faqs, sellingPoints, signupSteps } = useHomepageTL()
  const homepageBlock = { section: "FAQs", sectionID: "sec000", questions: [faqs[0].questions[0], faqs[1].questions[0], faqs[2].questions[0]] };
  return (
    <>
      <hr style={{ margin: `2rem 0` }} />
      <UpcomingEventPanel upcomingEventBlock={{upcomingEventContent: upcomingEvent.buttonContent, linkContent: upcomingEvent.linkContent, 
        button: {buttonColor: "#ffffff", textColor: "#f92b00", children: "Attend", hasBorder: false},
        eventDateTime: {date: events[0].date, time: events[0].time, location: events[0].location},
        eventTitle: events[0].title}}
        desktopBlockTitle={"Upcoming Event"}
        desktopCountdownContent={"In 5 days and 2 hours"}
        />
        <SignupPanel 
          blockTitle={"Your new adventure starts here!"}
          signUpSteps={signupSteps}
          buttonProps={{buttonColor: "#f92b00", textColor: "#fff", hasBorder: false, children: "Join Now"}}
        />
        <SalesPointPanel
          blockTitle={"The best part of Animers"} 
          bulletPoints={sellingPoints}
          buttonProps={{buttonColor: "#f92b00", textColor: "#fff", hasBorder: false, children: "Join Now"}}
        />
        <FAQItemBlock section={homepageBlock.section} sectionID={homepageBlock.sectionID} questions={homepageBlock.questions}/>
    </>
  )
}

export default Index

