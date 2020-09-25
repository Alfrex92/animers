import React from 'react'
import { StyleFAQSection } from "./styles"

import NavMenu from "../../molecules/NavMenu"
import DesktopSectionTitle from "../../atoms/DesktopSectionTitle"
import FAQItemBlock from "../../organisms/FAQItemBlock"
import Footer from "../../organisms/Footer"

interface FAQPageInterface {
    blockLabelList: FAQItemList["blockLabelContent"];
    emailMessage: string;
    emailAddress: string;
    socialMessage: string;
    copyrightContent: string;
    faqBlockList: FAQItemList;
    sectionTitle: string;
}

interface FAQItemList {
    itemList: FAQItemInterface[];
    blockLabelContent: string;
}

interface FAQItemInterface {
    question: string;
    answer: string;
}


const FAQPage: React.FC<FAQPageInterface> = (
    props: FAQPageInterface
) => {
    return (
        <div>
            <NavMenu />
            <DesktopSectionTitle title={props.sectionTitle} />
            <StyleFAQSection>
                {props.faqBlockList.map((block) => (
                    <FAQItemBlock blockLabelContent={block.blockLabelContent} faqItemList={block.itemList} />
                ))}
            </StyleFAQSection>
            <Footer emailMessage={props.emailMessage} emailAddress={props.emailAddress} socialMessage={props.socialMessage} copyrightContent={props.copyrightContent} />
        </div>
    )
}

export default FAQPage