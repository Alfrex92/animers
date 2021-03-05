import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars";
import { media } from "../../../styles/breakpoints"
import { Link } from "gatsby";


export const StyleLanguageOptionContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-width: 100px;
`;

export const StyleLanguageOption = styled.p`
    color: ${colors.gray.dark};
    font-size: ${fsize.normal};
    font-weight: ${fweight.w5};

    ${media.med`
        font-size: ${fsize.bigger};
        margin: 0 ${space.m} ${space.xs} 0;
        text-transform: uppercase;
    `}
`;

export const StyleLanguageLink = styled(Link)`
    text-decoration: none;
`;