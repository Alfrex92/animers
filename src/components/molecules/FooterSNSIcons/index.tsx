import React from 'react'
import { StyleSNSIconsWrapper } from "./styles"
import SocialIcon from "../../atoms/SNSIcon"
import translationsEn from "../../../../config/translations/en.json"

const SNSList = translationsEn.social;

const FooterSNSIcons: React.FC = () => {
    return (
        <StyleSNSIconsWrapper>
            {SNSList.map(item => (
                <SocialIcon serviceName={`${item.service.toLowerCase()}`} />
            ))}
        </StyleSNSIconsWrapper>
    )
}

export default FooterSNSIcons