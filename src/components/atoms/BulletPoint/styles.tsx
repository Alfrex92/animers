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

    ${media.med`
        font-size: ${fsize.bigger};
        margin: ${space.s} 0;
        width: 75%;
    `}
`;