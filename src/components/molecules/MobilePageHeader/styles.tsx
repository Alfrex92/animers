import styled from "styled-components";
import { colors, space, fsize, fweight } from "../../../styles/vars";
import { media } from "../../../styles/breakpoints";

export const StyledMobileHeaderWrapper = styled.div `
    align-items: center;
    display: flex;
    max-height: 10vh;
    min-height: 5vh;
    width: 100%;

    ${media.large `
        display: none;
    `}
`;

export const StyledMobileHeaderPageTitleWrapper = styled.div`
    color: ${colors.red.normal};
    font-size: ${fsize.big};
    font-weight: ${fweight.w4};
    text-align: left;
    text-transform: uppercase;
    width: 50%;
`;

export const StyledMobileHeaderPageTitle = styled.span``;