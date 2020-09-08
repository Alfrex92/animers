import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"

export const StyleHPCNumberLITitleWrapper = styled.div`
    display: block;
`;
export const StyleHPCNumberLITitle = styled.p`
    color: ${colors.red.normal};
    font-size: ${fsize.big};
    font-weight: ${fweight.w4};
    margin-left: ${space.s};
`;