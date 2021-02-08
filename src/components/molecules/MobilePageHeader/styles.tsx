import styled from "styled-components";
import { colors, space, fsize, fweight } from "../../../styles/vars";
import { media } from "../../../styles/breakpoints";

export const StyledMobileHeaderWrapper = styled.div `
    align-items: center;
    display: flex;
    justify-content: center;
    max-height: 10vh;
    min-height: 5vh;
    width: 100%;

    ${media.large `
        display: none;
    `}
`;

export const StyledMobileHeaderPageTitle = styled.div`
    color: ${colors.red.normal};
    flex-grow: 3;
    font-size: ${fsize.big};
    font-weight: ${fweight.w4};
    text-transform: uppercase;
`;