import React from 'react'
import { StyleDesktopNavWrapper } from "./styles"

import AnimersLogo from "../../atoms/AnimersLogo"
import NavMenu from "../../molecules/NavMenu"
import BasicButton from "../../molecules/BasicButton"
import LanguageOption from "../../atoms/LanguageOption"


interface DesktopNavInterface {
    languageOption: string,
    buttonText: string,
    buttonColor: string
}

const DesktopNav: React.FC<DesktopNavInterface> = (
    props: DesktopNavInterface
) => {
    return (
        <StyleDesktopNavWrapper>
            <AnimersLogo />
            <NavMenu />
            <div style={{ display: "flex", alignItems: "center" }}>
                <LanguageOption language={props.languageOption} />
                <BasicButton buttonColor={props.buttonColor} buttonText={props.buttonText} />
            </div>
        </StyleDesktopNavWrapper>
    )
}

export default DesktopNav