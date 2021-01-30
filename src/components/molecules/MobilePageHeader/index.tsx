import React from 'react';
import BackArrow from "../../atoms/BackArrow";
import { StyledMobileHeaderWrapper, StyledMobileHeaderPageTitle } from "./styles";

export interface MobilePageHeaderInterface {
    pageTitle: string
}

const MobilePageHeader: React.FC<MobilePageHeaderInterface> = (
    props: MobilePageHeaderInterface
) => {
    return (
        <StyledMobileHeaderWrapper>
            <BackArrow />
            <StyledMobileHeaderPageTitle><span>{props.pageTitle}</span></StyledMobileHeaderPageTitle>
        </StyledMobileHeaderWrapper>
    )
}

export default MobilePageHeader;