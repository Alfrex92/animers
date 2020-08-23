import styled from "styled-components"
import { colors, fsize, fweight } from "../../../styles/vars"

export const StyleCTAEmailWrapper = styled.div`
    width: 100%;
`;

export const StyleCTAEmailMessage = styled.span`
    color: ${colors.gray.darker};
    font-size: ${fsize.normal};
    font-weight: ${fweight.w7};
`;
export const StyleCTAEmailAddress = styled.span`
    color: ${colors.gray.dark};
    font-size: ${fsize.normal};
`;