import React from 'react'
import { StyleLanguageOptionContainer, StyleLanguageOption, StyleLanguageLink } from "./styles"
import { americanFlagSvg, japanFlagSvg } from "../../../Svgs"

interface LanguageOptionInterface {
    language: string
    urlSlug: string
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
    console.log("HEEE: ", props.language)
    return (
        <StyleLanguageOptionContainer>
            {props.language === "en" || props.language === "English" ? 
                <StyleLanguageLink to={`/ja${location.pathname}`} onClick={setLangVer}>{japanFlagSvg}</StyleLanguageLink>
             :
                <StyleLanguageLink to={`/${props.urlSlug}`} onClick={setLangVer}>{americanFlagSvg}</StyleLanguageLink>
            }
        </StyleLanguageOptionContainer>
    )
}

export default LanguageOption