import React from 'react'
import {AboutUsPageWrapper} from "./styles"
import AboutUs from "../../organisms/AboutUs"
import BasicButton from "../../molecules/BasicButton"
import Footer from "../../organisms/Footer"

interface AboutUsPageInterface {
    aboutUsContent: AboutUsContentInterface;
    buttonProps: BasicButtonInterface;
    footerProps: FooterInterface;
}

interface BasicButtonInterface {
    children: any
    buttonColor: string
    hasBorder: boolean
    textColor: string
}

interface FooterInterface {
    emailMessage: string,
    emailAddress: string,
    socialMessage: string,
    copyrightContent: string
}

interface AboutUsContentInterface {
    aboutUsSections: AboutSectionBlockInterface[];
    aboutUsStory: AboutUsStoryBlockInterface[];
    aboutUsStoryTitle: string;
    memberProps: MemberInfoFullInterface; 
}
  
interface AboutSectionBlockInterface {
    sectionTitle: string
    content: string | null
}
  
interface AboutUsStoryBlockInterface {
    parID: string
    content: string
    isFeaturedQuote: boolean
}
  
interface MemberInfoFullInterface {   
    sectionTitle: string;
    memberInfoArray: MemberInfoInterface[];
}
  
interface MemberInfoInterface {
    id: string;
    name: string;
    role: string;
    image: string;
    sns: {
      service: string;
      url: string;
    }[]
    description: string;
}

const AboutUsPage: React.FC<AboutUsPageInterface> = (
    props: AboutUsPageInterface
) => {
    return (
        <AboutUsPageWrapper>
            <div>
                <AboutUs aboutUsSections={props.aboutUsContent.aboutUsSections} aboutUsStory={props.aboutUsContent.aboutUsStory} aboutUsStoryTitle={props.aboutUsContent.aboutUsStoryTitle} memberProps={props.aboutUsContent.memberProps}/>
                <BasicButton buttonColor={props.buttonProps.buttonColor} textColor={props.buttonProps.textColor} hasBorder={props.buttonProps.hasBorder} children={props.buttonProps.children}/>
            </div>
            <Footer  emailAddress={props.footerProps.emailAddress} emailMessage={props.footerProps.emailMessage} copyrightContent={props.footerProps.copyrightContent} socialMessage={props.footerProps.socialMessage}/>
        </AboutUsPageWrapper>
    )
}

export default AboutUsPage