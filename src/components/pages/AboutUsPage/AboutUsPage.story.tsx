import React from "react"
import { storiesOf } from "@storybook/react"
import { text, color, boolean, withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"

import AboutUsPage from "./index"

const sectionsArr = [data.aboutUs[0], data.aboutUs[1]]

const story = storiesOf("Pages | AboutUsPage", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
// About Us page 
story.add("Component", () => (
  <div>
    <AboutUsPage
        aboutUsContent={{
        aboutUsSections: data.aboutUs,
        aboutUsStory: data.aboutUsStory,
        aboutUsStoryTitle: data.aboutUsStoryTitle,
        memberProps: {
            sectionTitle: text("Member section title", "Our Team"),
            memberInfoArray: data.team
        },
    }}
    buttonProps={{
        buttonColor: color("Button color", "#ffffff"),
        textColor: color("Text color", "#46adff"),
        children: text("Message", "Join Us"),
        hasBorder: boolean("Border?", true)
    }}
    footerProps={{
        emailMessage: text("Footer email message", "Get in Touch"),
        emailAddress: text("Footer email address", `${data.contact.address}`),
        socialMessage: text("Footer social message", "Follow Us"),
        copyrightContent: text("Footer copyright content", `${data.copyrightContent}`)
    }}
    />
  </div>
))
