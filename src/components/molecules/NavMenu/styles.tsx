import styled from "styled-components"
import { media } from "../../../styles/breakpoints"

export const StyleMenuLinkContainer = styled.div`
    background: white;

    ${media.med`
        display: flex;
        color: black;
        flex-direction: column;
        justify-content: space-evenly;
        max-height: 10vh;
        min-width: 40%;
    `};

    ${media.large`
        align-content: center;
        flex-direction: row;
        margin: 0;
        min-height: 1vh;
    `}

`;