import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleMenuLinkContainer = styled.div`
    background: white;
    padding-top: 10rem;
    width: 100%;

    ${media.med`
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
        min-height: 10vh;
        min-width: 40%;
    `};

    ${media.large`
        display: none;
    `}

`;