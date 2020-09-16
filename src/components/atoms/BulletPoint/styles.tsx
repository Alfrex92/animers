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
    width: 95%;

    ${media.large`
        font-size: ${fsize.small};
        margin: 0 ${space.m};
        width: 33%;
    `}
`;