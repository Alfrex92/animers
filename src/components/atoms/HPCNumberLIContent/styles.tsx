import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"

export const StyleHPCNumberLIContentWrapper = styled.div`
    display: block;
    text-align: left;
`;
export const StyleHPCNumberLIContent = styled.p`
    color: ${colors.black.normal};
    font-size: ${fsize.normal};
    padding-left: ${space.xs};
`;