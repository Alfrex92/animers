import React, { useState } from 'react'
import data from "../../../../config/translations/en.json"
import Logo from "../../atoms/Logo"
import LanguageOption from "../../atoms/LanguageOption"
import BurgerIcon from "../../atoms/Burger"
import MobileNavMenu from "../../pages/MobileNavMenu"
import { StyleMobileNavWrapper, StyleLanguageBurgerWrapper } from "./styles"

// const importedProps = {
//     emailMessage: data.emailCTA,
//     emailAddress: data.contact.address,
//     socialMessage: data.socialCTA,
//     copyrightContent: data.copyrightContent
// }

interface MobileNavInterFace {
    language: String
}

const MobileNav: React.FC<MobileNavInterFace> = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <StyleMobileNavWrapper>
            <Logo />
            <StyleLanguageBurgerWrapper>
                <LanguageOption language={props.language === "en" ? "English" : "日本語"} />
                <BurgerIcon open={open} setOpen={setOpen} />
            </StyleLanguageBurgerWrapper>
            <MobileNavMenu open={open} emailMessage={data.emailCTA} emailAddress={data.contact.address} socialMessage={data.socialCTA} copyrightContent={data.copyrightContent} />
        </StyleMobileNavWrapper>
    )
}

export default MobileNav