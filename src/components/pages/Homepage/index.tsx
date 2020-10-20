import React from 'react'
import {StyleHomepageWrapper} from "./styles"
import NextEventBanner from "../../molecules/NextEventBanner"
import MobileNav from "../../organisms/MobileNav"
import DesktopNav from "../../organisms/DesktopNav"
import UpcomingEventPanel from "../../organisms/UpcomingEventPanel"
import SignupPanel from "../../organisms/SignupPanel"
import SellingPointPanel from "../../organisms/SellingPointPanel"
import MessagePanel from "../../organisms/MessagePanel"
import Footer from "../../organisms/Footer"

interface HomepageInterface {
    bannerProps: BannerInterface;
    buttonProps: BasicButtonInterface;
    upcomingEventBlock: UpcomingEvenBlockInterface;
    desktopBlockTitle: string;
    desktopCountdownContent: string;
    signupPanelProps: SignupPanelInterface;
    sellingPointPanelProps: SellingPointPanelInterface;
    messagePanelProps: MessagePanelInterface;
    footerProps: FooterInterface;
}

interface BannerInterface {
    textContent: string;
    dateContent: string;
    buttonProps: BasicButtonInterface;
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

interface MessagePanelInterface {
    blockTitle: string;
    content: string;
    buttonProps: BasicButtonInterface;
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
            {screenX > 400 ? (DesktopNav): (MobileNav)}
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
            <MessagePanel blockTitle={props.messagePanelProps.blockTitle} content={props.messagePanelProps.content} buttonProps={props.messagePanelProps.buttonProps}/>
            <Footer emailAddress={props.footerProps.emailAddress} emailMessage={props.footerProps.emailMessage} socialMessage={props.footerProps.socialMessage} copyrightContent={props.footerProps.copyrightContent}/>
        </StyleHomepageWrapper>
    )
}

export default Homepage