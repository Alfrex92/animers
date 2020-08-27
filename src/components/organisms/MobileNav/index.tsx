import React, { useState } from 'react'
import Logo from "../../atoms/Logo"
import LanguageOption from "../../atoms/LanguageOption"
import BurgerIcon from "../../atoms/Burger"
import MobileNavMenu from "../../pages/MobileNavMenu"
import data from "../../../../config/translations/en.json"
import { StyleMobileNavWrapper, StyleLanguageBurgerWrapper } from "./styles"

const importedProps = {
    emailMessage: data.emailCTA,
    emailAddress: data.contact.address,
    socialMessage: data.socialCTA,
    copyrightContent: data.copyrightContent
}

const MobileNav: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <StyleMobileNavWrapper>
            <Logo />
            <StyleLanguageBurgerWrapper>
                <LanguageOption language={"English"} />
                <BurgerIcon open={open} setOpen={setOpen} />
            </StyleLanguageBurgerWrapper>
            <MobileNavMenu open={open} emailMessage={importedProps.emailMessage} emailAddress={importedProps.emailAddress} socialMessage={importedProps.socialMessage} copyrightContent={importedProps.copyrightContent} />
        </StyleMobileNavWrapper>
    )
}

export default MobileNav