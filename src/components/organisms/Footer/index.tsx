import React from 'react'
import { StyleFooterWrapper } from "./styles"

import CTAEmail from "../../atoms/CTAEmail"
import CTASocial from "../../atoms/CTASocial"
import FooterSNSIcons from "../../molecules/FooterSNSIcons"
import Copyright from "../../atoms/Copyright"

interface FooterInterface {
    emailMessage: string,
    emailAddress: string,
    socialMessage: string,
    copyrightContent: string
}

const Footer: React.FC<FooterInterface> = (
    props: FooterInterface
) => {
    return (
        <StyleFooterWrapper>
            <CTAEmail message={props.emailMessage} address={props.emailAddress} />
            <div>
                <CTASocial message={props.socialMessage} />
                <FooterSNSIcons />
            </div>
            <Copyright content={props.copyrightContent} />
        </StyleFooterWrapper>
    )
}

export default Footer