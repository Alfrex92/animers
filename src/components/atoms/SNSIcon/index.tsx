import * as React from 'react'
import { StyleSocialIconCircle, StyleSocialIconContent } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faMeetup } from "@fortawesome/free-brands-svg-icons"

interface SNSIconInterface {
    serviceName: string
}

function getSNSIcon(serviceName: string) {
    switch (serviceName) {
        case "facebook":
            return faFacebookF
        case "instagram":
            return faInstagram
        case "meetup":
            return faMeetup
    }
}



const SocialIcon: React.FC<SNSIconInterface> = (
    props: SNSIconInterface
) => {
    return (
        <StyleSocialIconCircle>
            <StyleSocialIconContent href="#" target="_blank">
                <FontAwesomeIcon icon={getSNSIcon(props.serviceName)!} />
            </StyleSocialIconContent>
        </StyleSocialIconCircle>
    )
}

export default SocialIcon