import styled from "styled-components"
import {colors, fsize, fweight, zindex} from "../../../styles/vars"
import {media} from "../../../styles/breakpoints"

export const StyleTextWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    z-index:n ${zindex.alpha};

    ${media.med`
        display: none;
    `} 
`;

export const StyleText = styled.p `
    color: ${colors.blue.light};
    font-size: ${fsize.normal};
    font-weight: ${fweight.w6};
`;