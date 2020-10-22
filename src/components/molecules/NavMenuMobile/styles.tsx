import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleMenuLinkContainer = styled.div`
        display: flex;
        color: black;
        flex-direction: column;
        justify-content: space-evenly;
        min-height: 10vh;
        min-width: 40%;

    ${media.med`
        display: none;
    `}

`;