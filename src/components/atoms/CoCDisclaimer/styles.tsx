import styled from "styled-components"
import { colors, space, fsize, fweight } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleDisclaimerWrapper = styled.div`
    margin: ${space.m} auto;
    text-align: center;

    ${media.med`
        margin: ${space.l} auto;
    `}
`;

export const StyleDisclaimerContent = styled.p`
    color: ${colors.gray.medium};
    font-size: ${fsize.normal};
    font-weight: ${fweight.w3};
`;