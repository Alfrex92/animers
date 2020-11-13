import React from 'react'
import useTranslations from "../components/useTranslations"
import FAQPageComponent from "../components/pages/FAQPage/index"

const FAQPage = () => {
    const { contact, copyrightContent, emailCTA, faqs, socialCTA } = useTranslations()
    return (
        <div>
            <FAQPageComponent 
                emailAddress={contact.address} emailMessage={emailCTA} socialMessage={socialCTA} copyrightContent={copyrightContent} sectionTitle={"FAQs"}
                faqList={faqs}
            />
        </div>
    )
}

export default FAQPage