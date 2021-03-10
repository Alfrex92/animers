import React from 'react'
import { StyleFAQPageWrapper, StyleFAQSection } from "./styles"

import NavMenu from "../../molecules/NavMenu"
import DesktopNav from "../../organisms/DesktopNav";
import MobilePageHeader from "../../molecules/MobilePageHeader";
import FAQItemBlock from "../../organisms/FAQItemBlock"
import Footer from "../../organisms/Footer"
import NextEventBanner from "../../molecules/NextEventBanner"

interface FAQPageInterface {
    emailMessage: string;
    emailAddress: string;
    socialMessage: string;
    copyrightContent: string;
    faqList: FAQItemBlockInterface[];
    mobileHeaderProps: MobilePageHeaderInterface
    desktopNavProps: DesktopNavInterface
    nextEventBannerProps: NextEventBannerInterface
}

interface FAQItemBlockInterface {
    sectionTitle: string;
    section: string;
    sectionID: string;
    questions: FAQItemInterface[];
}

interface FAQItemInterface {
    question: string;
    answer: string;
    id: string;
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

interface NavMenuInterface {
    links: LinkInterface[]
}

interface LinkInterface {
    title: string;
    id: string;
}

interface LogoLinkInterface {
    logoUrl: string,
}

interface NextEventBannerInterface {
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

const FAQPage: React.FC<FAQPageInterface> = (
    props: FAQPageInterface
) => {
    return (
        <StyleFAQPageWrapper>
            <NextEventBanner textContent={props.nextEventBannerProps.textContent} dateContent={props.nextEventBannerProps.dateContent} buttonProps={props.nextEventBannerProps.buttonProps}/>
            <DesktopNav languageProps={props.desktopNavProps.languageProps} navMenuProps={props.desktopNavProps.navMenuProps} logoProps={props.desktopNavProps.logoProps}
                buttonProps={props.desktopNavProps.buttonProps}
            />
            <MobilePageHeader pageTitle={props.mobileHeaderProps.pageTitle} languageProps={props.desktopNavProps.languageProps}/>
            <StyleFAQSection>
            {props.faqList.map(block => (
                    <FAQItemBlock section={block.section} sectionID={block.sectionID} faqQuestions={block.questions} key={block.sectionID} sectionTitle={block.section} />
            ))}
            </StyleFAQSection>
            <Footer emailMessage={props.emailMessage} emailAddress={props.emailAddress} socialMessage={props.socialMessage} copyrightContent={props.copyrightContent} />
        </StyleFAQPageWrapper>
    )
}

export default FAQPage