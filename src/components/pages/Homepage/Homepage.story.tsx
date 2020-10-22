import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, color, boolean, select } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"

import data from "../../../../config/translations/en.json";

import Homepage from "./index"

// Faq data shortcuts
const eventFAQs = data.faqs[0];
const covidFAQs = data.faqs[1];
const drinkFAQs = data.faqs[2];

// Mobile nav variables
const label = "Language";
const languageOptions = { ENG: "en", JP: "jp" };
const defaultValue = 'en';
const groupId = 'GROUP-ID1';

const story = storiesOf("Pages | Homepage", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Mobile navigation menu
story.add("Component", () => (
    <Homepage
        bannerProps={{textContent: text("Banner message", "Next Event"), dateContent: text("Event date", `${data.events[0].date}`), buttonProps: {buttonColor: color("Button color", "#ffffff"), textColor: color("Text color", "#f92b00"), children: text("Message", "Attend"), hasBorder: boolean("Border?", false)}}} 
        
        buttonProps={{
            buttonColor:color("Button color", "#f92b00"), textColor:color("Text color", "#ffffff"), hasBorder: boolean("Button border?", false), children: text("Button message", "Join Now")
        }}

        desktopBlockTitle={text("Desktop block title content", "Upcoming Event")} desktopCountdownContent={text("Countdown content", "in 5 days and 6 hours")}

        desktopNavProps={{
            languageOption: text("Desktop nav language option", "EN"),
            buttonProps: {buttonColor: color("messagePanel Button color", "#f92b00"), textColor: color("desktopNav button text color", "#ffffff"), children: text("desktopNav button message", "Participate"), hasBorder: boolean("desktopNav button has border?",  false)},
            navMenuProps: {links: data.menu}
        }}

        faqProps={{section: text("FAQ section title", "FAQs"), sectionID: "homepageFAQ001", questions: [eventFAQs.questions[0], covidFAQs.questions[0], drinkFAQs.questions[0]]}}

        footerProps={{
            emailMessage: "Get in Touch ",
            emailAddress: data.contact.address,
            socialMessage: "Follow Us",
            copyrightContent: data.copyrightContent
        }}

        imageGalleryProps={{
            images: data.gallery
        }}

        messagePanelProps={{
            blockTitle: text("Message panel title", "Make Friends!"),
            buttonProps: {buttonColor: color("messagePanel Button color", "#f92b00"), textColor: color("messagePanel button text color", "#ffffff"), children: text("messagePanel button message", "Participate"), hasBorder: boolean("messagePanel button has border?",  false)},
            content: "Don't miss your chance to join the largest anime community in Tokyo"
        }}

        mobileNavProps={{
            language: select(label, languageOptions, defaultValue, groupId), emailCTA: data.emailCTA, emailAddress: data.contact.address, socialCTA: data.socialCTA, copyrightContent: data.copyrightContent}
        }

        sellingPointPanelProps={{
            blockTitle: text("Selling point panel title", "The Best Part of Animers"),
            buttonProps: {buttonColor:color("sellingPointPanel Button color", "#f92b00"), textColor:color("sellingPointPanel button text color", "#ffffff"), hasBorder: boolean("sellingPointPanel button has border?", false), children: text("sellingPointPanel button message", "Join Now")},
            bulletPoints: data.sellingPoints
        }}

        signupPanelProps={{
            blockTitle: text("Singup panel title", "Your adventure starts here!"),
            buttonProps: {buttonColor: color("signupPanel Button color", "#f92b00"), hasBorder: boolean("signupPanel button has border?", false), textColor: color("signupPanel button text color", "#fff"), children: text("signupPanel button message", "Join Us")},
            signUpSteps:data.signupSteps
        }}

        upcomingEventBlock={{upcomingEventContent: text("Upcoming event block title content", "Upcoming Event"), linkContent: text("Link content", "See all"),
            eventTitle: text("Event title", `${data.events[0].title}`),
            eventDateTime: {date: text("Date", `${data.events[0].date}`), time: text("Time", `${data.events[0].time}`), location: text("Location", `${data.events[0].location}`)},
            button: {buttonColor: color("upcomingEvent Button color", "#ffffff"), textColor: color("upcomingEvent button text color", "#f92b00"), children: text("upcomingEvent message", "Attend"), hasBorder: boolean("upcomingEvent button has border?", false)}
        }}

    />
)
)