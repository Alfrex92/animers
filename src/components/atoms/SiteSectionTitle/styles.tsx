import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleSiteSectionTitleWrapper = styled.div`
    display: block;
    margin: ${space.m} auto ${space.m} auto;

    ${media.extra`
        display: none:
    `}
`;

export const StyleSiteSectionTitle = styled.p`
    color: ${colors.blue.light};
    display: block;
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w5};
`;