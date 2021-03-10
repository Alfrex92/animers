import React from 'react'
import { StyleDesktopNavWrapper, StyleLanguageAndButton } from "./styles"
import { animersLogoSvg } from "../../../Svgs";
import Logo from "../../atoms/Logo"
import NavMenu from "../../molecules/NavMenu"
import BasicButton from "../../molecules/BasicButton"
import LanguageOption from "../../atoms/LanguageOption"


interface DesktopNavInterface {
    languageProps: LanguageOptionInterface,
    buttonProps: BasicButtonInterface,
    navMenuProps: NavMenuInterface,
    logoProps: LogoLinkInterface
}

interface LanguageOptionInterface {
    language: string
    urlSlug: string
}

interface BasicButtonInterface {
    children: any;
    buttonColor: string;
    hasBorder: boolean;
    textColor: string;
}

interface NavMenuInterface {
    links: LinkInterface[]
}

interface LinkInterface {
    title: string;
    id: string;
    slug: string;
}

interface LogoLinkInterface {
    logoUrl: string,
}

const DesktopNav: React.FC<DesktopNavInterface> = (
    props: DesktopNavInterface
) => {
    return (
        <StyleDesktopNavWrapper>
            <Logo children={animersLogoSvg}/>
                <NavMenu links={props.navMenuProps.links}/>
                <StyleLanguageAndButton>
                <LanguageOption language={props.languageProps.language} urlSlug={props.languageProps.urlSlug} />
                <BasicButton buttonColor={props.buttonProps.buttonColor} textColor={props.buttonProps.textColor} children={props.buttonProps.children} hasBorder={props.buttonProps.hasBorder}/>
                </StyleLanguageAndButton>
        </StyleDesktopNavWrapper>
    )
}

export default DesktopNav