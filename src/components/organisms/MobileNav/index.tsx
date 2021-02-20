import React, { useState } from 'react'
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
    logoProps: LogoLinkInterface

}

interface NavMenuInterface {
    mobileNavLinks: LinkInterface[]
}

interface LinkInterface {
    title: string;
    id: string;
    slug: string;
}

interface LogoLinkInterface {
    logoUrl: string,
}

const MobileNav: React.FC<MobileNavInterFace> = (props: MobileNavInterFace) => {
    const [open, setOpen] = React.useState(false);
    return (
        <StyleMobileNavWrapper>
            <StyleLanguageBurgerWrapper>
                <LanguageOption language={props.language === "en" ? "English" : "日本語"} />
                <BurgerIcon open={open} setOpen={() => setOpen((oldProps) => !oldProps)} />
            </StyleLanguageBurgerWrapper>
            <MobileNavMenu  navMenuProps={props.navMenuProps} open={open} emailMessage={props.emailCTA} emailAddress={props.emailAddress} socialMessage={props.socialCTA} copyrightContent={props.copyrightContent} />
        </StyleMobileNavWrapper>
    )
}

export default MobileNav