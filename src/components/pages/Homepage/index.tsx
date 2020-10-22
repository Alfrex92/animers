import React from 'react'
import {StyleHomepageWrapper} from "./styles"
import NextEventBanner from "../../molecules/NextEventBanner"
import MobileNav from "../../organisms/MobileNav"
import DesktopNav from "../../organisms/DesktopNav"
import UpcomingEventPanel from "../../organisms/UpcomingEventPanel"
import SignupPanel from "../../organisms/SignupPanel"
import SellingPointPanel from "../../organisms/SellingPointPanel"
import FAQItemBlock from "../../organisms/FAQItemBlock"
import MessagePanel from "../../organisms/MessagePanel"
import ImageGallery from "../../molecules/ImageGallery"
import Footer from "../../organisms/Footer"

interface HomepageInterface {
    bannerProps: BannerInterface;
    mobileNavProps: MobileNavInterFace;
    desktopNavProps: DesktopNavInterface;
    buttonProps: BasicButtonInterface;
    upcomingEventBlock: UpcomingEvenBlockInterface;
    desktopBlockTitle: string;
    desktopCountdownContent: string;
    signupPanelProps: SignupPanelInterface;
    sellingPointPanelProps: SellingPointPanelInterface;
    faqProps: FAQItemBlockInterface;
    messagePanelProps: MessagePanelInterface;
    imageGalleryProps: ImageGalleryInterface;
    footerProps: FooterInterface;
}

interface BannerInterface {
    textContent: string;
    dateContent: string;
    buttonProps: BasicButtonInterface;
}

interface DesktopNavInterface {
    languageOption: string;
    buttonProps: BasicButtonInterface;
    navMenuProps: NavMenuInterface;
}
interface NavMenuInterface {
    links: LinkInterface[]
}

interface LinkInterface {
    title: string;
    id: string;
}

interface MobileNavInterFace {
    language: string;
    emailCTA: string;
    emailAddress: string;
    socialCTA: string;
    copyrightContent: string;

}

interface BasicButtonInterface {
    children: any;
    buttonColor: string;
    hasBorder: boolean;
    textColor: string;
}
interface UpcomingEvenBlockInterface {
    upcomingEventContent: string;
    linkContent: string;
    eventTitle: string;
    eventDateTime: EventDateTimeInterface;
    button: BasicButtonInterface;
}

interface EventDateTimeInterface {
    date: string;
    time: string;
    location: string;
}

interface SignupPanelInterface {
    blockTitle: string
    buttonProps: BasicButtonInterface
    signUpSteps: SignupStepInterface[]
}
  
interface SignupStepInterface {
    id: string;
    stepNum: string;
    title: string;
    subtitle: string;
}

interface SellingPointPanelInterface {
    blockTitle: string
    buttonProps: BasicButtonInterface
    bulletPoints: BulletPointInterface[]
}
  
  interface BulletPointInterface {
    id: string;
    content: string;
}

interface FAQItemBlockInterface {
    section: string;
    sectionID: string;
    questions: FAQItemInterface[];
}

interface FAQItemInterface {
    question: string;
    answer: string;
}

interface MessagePanelInterface {
    blockTitle: string;
    content: string;
    buttonProps: BasicButtonInterface;
}

interface ImageGalleryInterface {
    images: GalleryImageInterface[]
}

interface GalleryImageInterface {
    alt: string
    url: string
    id: string
}

interface FooterInterface {
    emailMessage: string,
    emailAddress: string,
    socialMessage: string,
    copyrightContent: string
}

const Homepage: React.FC<HomepageInterface> = (
    props: HomepageInterface
) => {
    return (
        <StyleHomepageWrapper>
            <NextEventBanner textContent={props.bannerProps.textContent} dateContent={props.bannerProps.dateContent} buttonProps={props.bannerProps.buttonProps}/>
            {/* <MobileNav language={props.mobileNavProps.language} emailAddress={props.mobileNavProps.emailAddress} emailCTA={props.mobileNavProps.emailCTA} socialCTA={props.mobileNavProps.socialCTA} copyrightContent={props.mobileNavProps.copyrightContent}/> */}
            <DesktopNav languageOption={props.desktopNavProps.languageOption}  buttonProps={props.desktopNavProps.buttonProps} navMenuProps={{links: props.desktopNavProps.navMenuProps.links}}/>
            <UpcomingEventPanel 
            desktopCountdownContent={props.desktopCountdownContent}
            desktopBlockTitle={props.desktopBlockTitle}
            upcomingEventBlock={{upcomingEventContent: props.upcomingEventBlock.upcomingEventContent, linkContent: props.upcomingEventBlock.linkContent,
                eventTitle: props.upcomingEventBlock.eventTitle, eventDateTime: props.upcomingEventBlock.eventDateTime,
                button: {
                    children: props.upcomingEventBlock.button.children, buttonColor: props.upcomingEventBlock.button.buttonColor, textColor: props.upcomingEventBlock.button.textColor, hasBorder: props.upcomingEventBlock.button.hasBorder
                }, 
            }}
            />
            <SignupPanel blockTitle={props.signupPanelProps.blockTitle}  signUpSteps={props.signupPanelProps.signUpSteps} buttonProps={props.signupPanelProps.buttonProps}/>
            <SellingPointPanel blockTitle={props.sellingPointPanelProps.blockTitle}  buttonProps={props.sellingPointPanelProps.buttonProps} bulletPoints={props.sellingPointPanelProps.bulletPoints}/>
            <FAQItemBlock section={props.faqProps.section} sectionID={props.faqProps.sectionID} questions={props.faqProps.questions}/>
            <MessagePanel blockTitle={props.messagePanelProps.blockTitle} content={props.messagePanelProps.content} buttonProps={props.messagePanelProps.buttonProps}/>
            <ImageGallery images={props.imageGalleryProps.images}/>
            <Footer emailAddress={props.footerProps.emailAddress} emailMessage={props.footerProps.emailMessage} socialMessage={props.footerProps.socialMessage} copyrightContent={props.footerProps.copyrightContent}/>
        </StyleHomepageWrapper>
    )
}

export default Homepage