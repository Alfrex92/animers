import styled from "styled-components"
import { zindex } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleMenuLinkContainer = styled.div`
        background-color: white;
        display: flex;
        color: black;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        min-width: 40%;
        z-index: ${zindex.menu}

    ${media.med`
        display: none;
    `}

`;