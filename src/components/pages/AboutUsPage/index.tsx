import React from 'react'
import {StyledAboutUsPageWrapper, StyledAboutUsPageInner} from "./styles"
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
    languageProps: LanguageOptionInterface,
    buttonProps: BasicButtonInterface,
    navMenuProps: NavMenuInterface,
    logoProps: LogoLinkInterface
  }
  
  interface LanguageOptionInterface {
    language: string
    urlSlug: string
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
        <StyledAboutUsPageWrapper>
            <NextEventBanner textContent={props.nextEventBannerProps.textContent} dateContent={props.nextEventBannerProps.dateContent} buttonProps={props.nextEventBannerProps.buttonProps}/>
            <DesktopNav languageProps={props.desktopNavProps.languageProps} navMenuProps={props.desktopNavProps.navMenuProps} logoProps={props.desktopNavProps.logoProps}
            buttonProps={props.desktopNavProps.buttonProps}
            />
            <MobilePageHeader pageTitle={props.mobileHeaderProps.pageTitle} languageProps={props.desktopNavProps.languageProps}/>
            <StyledAboutUsPageInner>
                <AboutUs aboutUsSections={props.aboutUsContent.aboutUsSections} aboutUsStory={props.aboutUsContent.aboutUsStory} aboutUsStoryTitle={props.aboutUsContent.aboutUsStoryTitle} memberProps={props.aboutUsContent.memberProps}/>
                <BasicButton buttonColor={props.buttonProps.buttonColor} textColor={props.buttonProps.textColor} hasBorder={props.buttonProps.hasBorder} children={props.buttonProps.children}/>
            </StyledAboutUsPageInner>
            <Footer  emailAddress={props.footerProps.emailAddress} emailMessage={props.footerProps.emailMessage} copyrightContent={props.footerProps.copyrightContent} socialMessage={props.footerProps.socialMessage}/>
        </StyledAboutUsPageWrapper>
    )
}

export default AboutUsPage