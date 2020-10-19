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
    textContent: string;
    dateContent: string;
    buttonProps: BasicButtonInterface;
    upcomingEventBlock: UpcomingEvenBlockInterface;
    desktopBlockTitle: string;
    desktopCountdownContent: string;
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

const Homepage: React.FC<HomepageInterface> = (
    props: HomepageInterface
) => {
    return (
        <StyleHomepageWrapper>
            <NextEventBanner textContent={props.textContent} dateContent={props.dateContent} buttonProps={props.buttonProps}/>
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
            <SignupPanel />
            <SellingPointPanel />
            <MessagePanel />
            <Footer />
        </StyleHomepageWrapper>
    )
}

export default Homepage