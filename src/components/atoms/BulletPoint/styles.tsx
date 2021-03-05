import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleBulletPoint = styled.li`
    color: ${colors.gray.darker};
    font-size: ${fsize.big};
    font-weight: ${fweight.w3};
    list-style-type: disc;
    margin: ${space.s} auto;
    text-align: left;

    ${media.med`
        font-size: ${fsize.bigger};
        margin: ${space.s} ${space.s};
    `}

    ${media.large`
        font-size: ${fsize.bigger};
        margin: ${space.s} ${space.m};
    `}
`;