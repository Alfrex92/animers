import React from 'react';
import BackArrow from "../../atoms/BackArrow";
import { StyledMobileHeaderWrapper, StyledMobileHeaderPageTitleWrapper, StyledMobileHeaderPageTitle } from "./styles";

export interface MobilePageHeaderInterface {
    pageTitle: string
}

const MobilePageHeader: React.FC<MobilePageHeaderInterface> = (
    props: MobilePageHeaderInterface
) => {
    return (
        <StyledMobileHeaderWrapper>
            <BackArrow />
            <StyledMobileHeaderPageTitleWrapper><StyledMobileHeaderPageTitle>{props.pageTitle}</StyledMobileHeaderPageTitle></StyledMobileHeaderPageTitleWrapper>
        </StyledMobileHeaderWrapper>
    )
}

export default MobilePageHeader;