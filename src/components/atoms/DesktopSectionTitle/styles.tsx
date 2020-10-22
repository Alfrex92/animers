import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { space, fsize, fweight, colors } from "../../../styles/vars"

export const StyleDesktopSectionTitleWrapper = styled.div`
    display: none;
    margin-bottom: ${space.s};
    text-align: center;

    ${media.med`
        display: block;
    `}
`;


export const StyleDesktopSectionTitleContent = styled.p`
    color: ${colors.gray.darker};
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w6};
`;