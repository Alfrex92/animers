import React, { useState } from 'react'
import Logo from "../../atoms/Logo"
import LanguageOption from "../../atoms/LanguageOption"
import BurgerIcon from "../../atoms/Burger"
import MobileNavMenu from "../../pages/MobileNavMenu"
import { StyleMobileNavWrapper, StyleLanguageBurgerWrapper } from "./styles"

interface MobileNavInterFace {
    language: string;
    emailCTA: string;
    emailAddress: string;
    socialCTA: string;
    copyrightContent: string;
    navMenuProps: NavMenuInterface;

}

interface NavMenuInterface {
    mobileNavLinks: LinkInterface[]
}

interface LinkInterface {
    title: string;
    id: string;
}

const MobileNav: React.FC<MobileNavInterFace> = (props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <StyleMobileNavWrapper>
            <Logo />
            <StyleLanguageBurgerWrapper>
                <LanguageOption language={props.language === "en" ? "English" : "日本語"} />
                <BurgerIcon open={open} setOpen={() => setOpen((oldProps) => !oldProps)} />
            </StyleLanguageBurgerWrapper>
            <MobileNavMenu  navMenuProps={props.navMenuProps} open={open} emailMessage={props.emailCTA} emailAddress={props.emailAddress} socialMessage={props.socialCTA} copyrightContent={props.copyrightContent} />
        </StyleMobileNavWrapper>
    )
}

export default MobileNav