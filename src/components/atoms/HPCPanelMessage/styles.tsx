import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"

export const StyleHPCPanelMessageWrapper = styled.div`
    display: block;
    text-align: center;
`;
export const StyleHPCPanelMessage = styled.p`
    color: ${colors.gray.darker};
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w5};
`;