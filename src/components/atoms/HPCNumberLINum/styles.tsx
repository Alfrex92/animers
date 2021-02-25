import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleHPCNumberLINumWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const StyleHPCNumberLINum = styled.p`
    color: ${colors.red.normal};
    font-size: ${fsize.biggest};
    font-weight: ${fweight.w8};
    margin: 0;
    padding-top: ${space.m};
`;