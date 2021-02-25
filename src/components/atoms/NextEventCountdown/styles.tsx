import styled from "styled-components"
import {colors, fsize, fweight} from "../../../styles/vars"
import {media} from "../../../styles/breakpoints"

export const StyleCountdownWrapper = styled.div `
    display: none;

    ${media.med `
        display: flex;
        flex-direction: row;
        justify-content: center;        
    `}
`;

export const StyleCountdown = styled.p `
    color: ${colors.black.normal};
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w1};
`;