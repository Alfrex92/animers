import React from 'react'
import { StyleLanguageOptionContainer, StyleLanguageOption, StyleLanguageLink } from "./styles"
import { americanFlagSvg, japanFlagSvg } from "../../../Svgs"

interface LanguageOptionInterface {
    language: string
}

const setLangVer = (props) => {
    // Overrides automatic locale redirect in wrapPageElement.js
    // by creating a new property
    if (props.forcedLanguage === undefined || "ja") {
        props.forcedLanguage = "en"
        props.language = "en";
    } 
    if (props.forcedLanguage === "en") {
        props.forcedLanguage = "ja"
        props.language = "ja";
    } 

}

const LanguageOption: React.FC<LanguageOptionInterface> = (
    props: LanguageOptionInterface
) => {
    console.log("HURRRR: ", props.language)
    return (
        <StyleLanguageOptionContainer>
            {/* <StyleLanguageOption>{props.language}</StyleLanguageOption> */}
            {props.language === "en" || props.language === "English" && <StyleLanguageLink to={"/ja"} onClick={setLangVer}>{japanFlagSvg}</StyleLanguageLink>}
            {props.language === "ja" || props.language === "日本語" && <StyleLanguageLink to={"/"} onClick={setLangVer}>{americanFlagSvg}</StyleLanguageLink>}
        </StyleLanguageOptionContainer>
    )
}

export default LanguageOption