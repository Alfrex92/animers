import React from 'react'
import { StyleLanguageOptionContainer, StyleLanguageLink } from "./styles"
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
    return (
        <StyleLanguageOptionContainer>
            {props.language === "en" || props.language === "English" ? 
                <StyleLanguageLink to={`/ja${location.pathname}`} onClick={setLangVer}>{japanFlagSvg}</StyleLanguageLink>
             :
             props.urlSlug === "/ja" 
                ? 
                <StyleLanguageLink to={`/${props.urlSlug}`} onClick={setLangVer}>{americanFlagSvg}</StyleLanguageLink>
                :
                <StyleLanguageLink to={`/`} onClick={setLangVer}>{americanFlagSvg}</StyleLanguageLink>
            }
        </StyleLanguageOptionContainer>
    )
}

export default LanguageOption