import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleBulletPointList = styled.ul`
    display: block;
    list-style: circle;
    margin: ${space.s} auto;
    padding: 0;

    ${media.large`
        display: flex;
        flex-direction: column;
        height: 100px;
        justify-content: space-between;
        width: 50%;
        flex-wrap: wrap;
    `} 
`;