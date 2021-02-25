import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"

export const StyleHPCNumberLITitleWrapper = styled.div`
    display: block;
    text-align: left;
`;
export const StyleHPCNumberLITitle = styled.p`
    color: ${colors.red.normal};
    font-size: ${fsize.bigger2};
    font-weight: ${fweight.w7};
    margin-left: ${space.xs};
`;