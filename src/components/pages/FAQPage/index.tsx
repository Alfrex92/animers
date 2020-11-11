import React from 'react'
import { StyleFAQSection } from "./styles"

import NavMenu from "../../molecules/NavMenu"
import DesktopSectionTitle from "../../atoms/DesktopSectionTitle"
import FAQItemBlock from "../../organisms/FAQItemBlock"
import Footer from "../../organisms/Footer"

interface FAQPageInterface {
    emailMessage: string;
    emailAddress: string;
    socialMessage: string;
    copyrightContent: string;
    faqList: FAQItemBlockInterface[];
    sectionTitle: string;
}

interface FAQItemBlockInterface {
    section: string;
    sectionID: string;
    questions: FAQItemInterface[];
}

interface FAQItemInterface {
    question: string;
    answer: string;
    itemID: string;
}


const FAQPage: React.FC<FAQPageInterface> = (
    props: FAQPageInterface
) => {
    return (
        <div>
            <DesktopSectionTitle title={props.sectionTitle} />
            <StyleFAQSection>
                {props.faqList.map((block) => (
                    <FAQItemBlock section={block.section} sectionID={block.sectionID} questions={block.questions} key={block.sectionID}/>
                ))}
            </StyleFAQSection>
            <Footer emailMessage={props.emailMessage} emailAddress={props.emailAddress} socialMessage={props.socialMessage} copyrightContent={props.copyrightContent} />
        </div>
    )
}

export default FAQPage