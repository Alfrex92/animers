import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleHPCNumberLINumWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
// @@@ Make Number align with top
export const StyleHPCNumberLINum = styled.p`
    color: ${colors.red.normal};
    font-size: 40px;
    font-weight: ${fweight.w8};
`;