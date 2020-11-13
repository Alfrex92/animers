import styled from "styled-components"
import {colors, fsize, fweight, zindex, space} from "../../../styles/vars"

export const StyleLinkWrapper = styled.div `
    align-content: flex-end;
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
`;

export const StyleLink = styled.p `
    color: ${colors.black.normal};
    font-size: ${fsize.small};
    font-weight: ${fweight.w1};
    text-decoration: underline;
    z-index: ${zindex.alpha};
`;