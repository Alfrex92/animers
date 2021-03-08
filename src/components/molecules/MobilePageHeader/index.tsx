import React from 'react';
import BackArrow from "../../atoms/BackArrow";
import LanguageOption from "../../atoms/LanguageOption";
import { StyledMobileHeaderWrapper, StyledMobileHeaderPageTitleWrapper, StyledMobileHeaderPageTitle } from "./styles";

export interface MobilePageHeaderInterface {
    pageTitle: string;
    languageProps: LanguageOptionInterface
}

interface LanguageOptionInterface {
    language: string
    urlSlug: string
}

const MobilePageHeader: React.FC<MobilePageHeaderInterface> = (
    props: MobilePageHeaderInterface
) => {
    return (
        <StyledMobileHeaderWrapper>
            <BackArrow />
            <StyledMobileHeaderPageTitleWrapper><StyledMobileHeaderPageTitle>{props.pageTitle}</StyledMobileHeaderPageTitle></StyledMobileHeaderPageTitleWrapper>
            <LanguageOption language={props.languageProps.language} urlSlug={props.languageProps.urlSlug}/>
        </StyledMobileHeaderWrapper>
    )
}

export default MobilePageHeader;