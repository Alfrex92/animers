import styled from "styled-components"
import {colors, fsize, fweight, zindex} from "../../../styles/vars"
import {media} from "../../../styles/breakpoints"

export const StyleTextWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    z-index:n ${zindex.alpha};

    ${media.med`
        display: none;
    `} 
`;

export const StyleText = styled.p `
    color: ${colors.blue.light};
    font-size: ${fsize.big};
    font-weight: ${fweight.w9};
`;