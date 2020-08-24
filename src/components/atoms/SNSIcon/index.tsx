import * as React from 'react'
import { StyleSocialIconCircle, StyleSocialIconContent } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faMeetup } from "@fortawesome/free-brands-svg-icons"
import data from "../../../../config/translations/en.json";

const socialArray = data.social;
let url = ""; // store url in variable during getSNSIcon call


interface SNSIconInterface {
    type: string | "facebook" | "instagram" | "meetup"
}

function getSNSIcon(type: string) {
    switch (type) {
        case "facebook":
            url = socialArray[0].link;
            return faFacebookF
        case "instagram":
            url = socialArray[1].link;
            return faInstagram
        case "meetup":
            url = socialArray[2].link;
            return faMeetup
    }
}



const SocialIcon: React.FC<SNSIconInterface> = (
    props: SNSIconInterface
) => {
    return (
        <StyleSocialIconCircle>
            <StyleSocialIconContent href={url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={getSNSIcon(props.type)!} />
            </StyleSocialIconContent>
        </StyleSocialIconCircle>
    )
}

export default SocialIcon