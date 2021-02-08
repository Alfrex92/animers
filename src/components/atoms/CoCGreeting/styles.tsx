import styled from "styled-components"
import { colors, space, fsize, fweight } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleCoCGreetingWrapper = styled.div`
    margin: ${space.s} auto;
    text-align: center;

    ${media.med`
        margin: ${space.m} auto;
    `}
`;

export const StyleCoCGreetingContent = styled.p`
    color: ${colors.gray.darker};
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w6};
`;