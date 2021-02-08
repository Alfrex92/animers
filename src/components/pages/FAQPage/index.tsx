import React from 'react'
import { StyleFAQSection } from "./styles"

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
    itemID: string;
}

interface FAQCategoryLabelInterface {
    content: string;
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
    console.log("FAQ LIST: ", props.faqList)
    return (
        <div style={{ margin: 0 }}>
            <NextEventBanner textContent={props.nextEventBannerProps.textContent} dateContent={props.nextEventBannerProps.dateContent} buttonProps={props.nextEventBannerProps.buttonProps}/>
            <DesktopNav languageOption={props.desktopNavProps.languageOption} navMenuProps={props.desktopNavProps.navMenuProps} logoProps={props.desktopNavProps.logoProps}
                buttonProps={props.desktopNavProps.buttonProps}
            />
            <MobilePageHeader pageTitle={props.mobileHeaderProps.pageTitle}/>
            <StyleFAQSection>
            {props.faqList.map(block => (
                    <FAQItemBlock section={block.section} sectionID={block.sectionID} faqQuestions={block.questions} key={block.sectionID} sectionTitle={block.section} />
            ))}
            </StyleFAQSection>
            <Footer emailMessage={props.emailMessage} emailAddress={props.emailAddress} socialMessage={props.socialMessage} copyrightContent={props.copyrightContent} />
        </div>
    )
}

export default FAQPage