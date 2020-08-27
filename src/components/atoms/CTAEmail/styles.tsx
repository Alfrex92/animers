import styled from "styled-components"
import { colors, fsize, fweight } from "../../../styles/vars"

export const StyleCTAEmailWrapper = styled.div`
    height: 1.5rem;
    width: 100%;
`;

export const StyleCTAEmailMessage = styled.span`
    color: ${colors.gray.darker};
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w8};
    margin-right: 0.5rem;
`;
export const StyleCTAEmailAddress = styled.a`
    color: ${colors.gray.dark};
    font-size: ${fsize.bigger};
`;