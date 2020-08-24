import React from 'react'
import { StyleSNSIconsWrapper } from "./styles"
import SocialIcon from "../../atoms/SNSIcon"
import data from "../../../../config/translations/en.json"

const SNSList = data.social;

const FooterSNSIcons: React.FC = () => {
    return (
        <StyleSNSIconsWrapper>
            {SNSList.map((item, key) => (
                <SocialIcon type={`${item.service.toLowerCase()}`} key={item.service} />
            ))}
        </StyleSNSIconsWrapper>
    )
}

export default FooterSNSIcons