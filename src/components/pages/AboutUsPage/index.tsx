import React from 'react'
import {AboutUsPageWrapper} from "./styles"
import AboutUs from "../../organisms/AboutUs"
import BasicButton from "../../molecules/BasicButton"
import MobilePageHeader from "../../molecules/MobilePageHeader";
import Footer from "../../organisms/Footer"
import DesktopNav from "../../organisms/DesktopNav";
import NextEventBanner from "../../molecules/NextEventBanner"

interface AboutUsPageInterface {
    aboutUsContent: AboutUsContentInterface;
    buttonProps: BasicButtonInterface;
    footerProps: FooterInterface;
    mobileHeaderProps: MobilePageHeaderInterface
    desktopNavProps: DesktopNavInterface
    nextEventBannerProps: NextEventBannerInterface
}

interface BasicButtonInterface {
    children: any
    buttonColor: string
    hasBorder: boolean
    textColor: string
}

interface MobilePageHeaderInterface {
    pageTitle: string
}

interface DesktopNavInterface {
    languageOption: string,
    buttonProps: BasicButtonInterface,
    navMenuProps: NavMenuInterface,
    logoProps: LogoLinkInterface
}

interface LogoLinkInterface {
    logoUrl: string,
}

interface NavMenuInterface {
    links: LinkInterface[]
}

interface LinkInterface {
    title: string;
    id: string;
    slug: string;
}

interface NextEventBannerInterface {
    textContent: string;
    dateContent: string;
    buttonProps: BasicButtonInterface;
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
            <NextEventBanner textContent={props.nextEventBannerProps.textContent} dateContent={props.nextEventBannerProps.dateContent} buttonProps={props.nextEventBannerProps.buttonProps}/>
            <DesktopNav languageOption={props.desktopNavProps.languageOption} navMenuProps={props.desktopNavProps.navMenuProps} logoProps={props.desktopNavProps.logoProps}
            buttonProps={props.desktopNavProps.buttonProps}
            />
            <MobilePageHeader pageTitle={props.mobileHeaderProps.pageTitle}/>
            <div>
                <AboutUs aboutUsSections={props.aboutUsContent.aboutUsSections} aboutUsStory={props.aboutUsContent.aboutUsStory} aboutUsStoryTitle={props.aboutUsContent.aboutUsStoryTitle} memberProps={props.aboutUsContent.memberProps}/>
                <BasicButton buttonColor={props.buttonProps.buttonColor} textColor={props.buttonProps.textColor} hasBorder={props.buttonProps.hasBorder} children={props.buttonProps.children}/>
            </div>
            <Footer  emailAddress={props.footerProps.emailAddress} emailMessage={props.footerProps.emailMessage} copyrightContent={props.footerProps.copyrightContent} socialMessage={props.footerProps.socialMessage}/>
        </AboutUsPageWrapper>
    )
}

export default AboutUsPage