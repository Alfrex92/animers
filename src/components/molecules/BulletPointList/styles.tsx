import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleBulletPointList = styled.ul`
    display: block;
    list-style: circle;
    margin: ${space.s} 0;
    padding: 0;

    ${media.large`
        display: flex;
        flex-direction: column;
        max-height: 100px;
        justify-content: space-between;
        flex-wrap: wrap;
    `} 
`;