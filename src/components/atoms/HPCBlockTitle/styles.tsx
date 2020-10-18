import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleHPCBlockTitleWrapper = styled.div`
    display: block;
`;
export const StyleHPCBlockTitle = styled.p`
    color: ${colors.blue.light};
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w5};    
`;