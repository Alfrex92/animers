import React, {useState} from 'react'
import { StyleLanguageOptionContainer, StyleLanguageOption, StyleLanguageLink } from "./styles"
import { americanFlagSvg, japanFlagSvg } from "../../../Svgs"
import { useGetRedirectLanguage } from "../../../../localeRedirect"

interface LanguageOptionInterface {
    language: string
}

const setLangVer = (props) => {
    if (props.forcedLanguage === undefined || "ja") {
        props.forcedLanguage = "en"
        props.language = "en";
        console.log("CHANGED PROPS: ", props.forcedLanguage)
    } 
    if (props.forcedLanguage === "en") {
        props.forcedLanguage = "ja"
        props.language = "ja";
        console.log("CHANGED PROPS: ", props.forcedLanguage)
    } 

}

const LanguageOption: React.FC<LanguageOptionInterface> = (
    props: LanguageOptionInterface
) => {
    return (
        <StyleLanguageOptionContainer>
            <StyleLanguageOption>{props.language}</StyleLanguageOption>
            {props.language === "en" && <StyleLanguageLink to={"/ja"} onClick={setLangVer}>{japanFlagSvg}</StyleLanguageLink>}
            {props.language === "ja" && <StyleLanguageLink to={"/"} onClick={setLangVer}>{americanFlagSvg}</StyleLanguageLink>}
        </StyleLanguageOptionContainer>
    )
}

export default LanguageOption