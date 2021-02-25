import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars";
import { media } from "../../../styles/breakpoints"


export const StyleLanguageOptionContainer = styled.div``;

export const StyleLanguageOption = styled.p`
    color: ${colors.gray.dark};
    font-size: ${fsize.normal};
    font-weight: ${fweight.w5};

    ${media.med`
        font-size: ${fsize.bigger};
        margin-right: ${space.m};
        text-transform: uppercase;
    `}
`;