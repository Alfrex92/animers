import styled from "styled-components"
import { space, fsize } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleBulletPointList = styled.ul`
    display: block;
    list-style: circle;
    margin: ${space.s} 0;
    padding: 0;

    ${media.med`
        display: flex;
        flex-direction: column;
        font-size: ${fsize.big};
        flex-wrap: wrap;
        max-height: 200px;
        min-height: 75px;
        margin: 0;
    `} 
`;