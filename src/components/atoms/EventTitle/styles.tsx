import styled from "styled-components"
import {colors, fsize, fweight, space} from "../../../styles/vars"

export const StyleEventTitleWrapper = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const StyleEventTitle = styled.p `
    color: ${colors.white.normal};
    font-size: ${fsize.big};
    font-weight: ${fweight.w9};
`;