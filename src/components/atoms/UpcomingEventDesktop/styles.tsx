import styled from "styled-components"
import {colors, fsize, fweight, space} from "../../../styles/vars"

export const StyleTextWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const StyleText = styled.p `
    color: ${colors.blue.light};
    font-size: ${fsize.bigger2};
    font-weight: ${fweight.w6};
`;