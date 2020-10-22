import React from 'react'
import { StyleDesktopNavWrapper } from "./styles"

import AnimersLogo from "../../atoms/Logo"
import NavMenu from "../../molecules/NavMenu"
import BasicButton from "../../molecules/BasicButton"
import LanguageOption from "../../atoms/LanguageOption"


interface DesktopNavInterface {
    languageOption: string,
    buttonProps: BasicButtonInterface,
    navMenuProps: NavMenuInterface
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
}

const DesktopNav: React.FC<DesktopNavInterface> = (
    props: DesktopNavInterface
) => {
    return (
        <StyleDesktopNavWrapper>
            <AnimersLogo />
            <NavMenu links={props.navMenuProps.links}/>
            <div style={{ display: "flex", alignItems: "center" }}>
                <LanguageOption language={props.languageOption} />
                <BasicButton buttonColor={props.buttonProps.buttonColor} textColor={props.buttonProps.textColor} children={props.buttonProps.children} hasBorder={props.buttonProps.hasBorder}/>
            </div>
        </StyleDesktopNavWrapper>
    )
}

export default DesktopNav