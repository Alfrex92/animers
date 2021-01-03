import styled from "styled-components";
import { colors, fsize, fweight } from "../../../styles/vars";
import { media } from "../../../styles/breakpoints";


export const StyleLogoContainer = styled.div``;

export const StyleLogo = styled.p`
    color: ${colors.red.normal};
    font-family: "Social Gothic";
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w8};
    margin-left: 1.5rem;

    ${media.med `
        font-size: ${fsize.bigger2};
    `}
`;