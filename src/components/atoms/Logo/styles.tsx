import styled from "styled-components";
import { colors, fsize, fweight } from "../../../styles/vars";
import { media } from "../../../styles/breakpoints";
import { Link } from "gatsby";


export const StyleLogoContainer = styled.div`
    display: block;
`;

export const StyleLogo = styled(Link)`
    text-decoration: none;
`;

export const StyleLinkName = styled.span`
    color: ${colors.red.normal};
    font-family: "Social Gothic";
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w8};
    margin-left: 1.5rem;

    ${media.med `
        font-size: ${fsize.bigger2};
    `}
`;