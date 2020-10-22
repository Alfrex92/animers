import styled from "styled-components"
import {media} from "../../../styles/breakpoints"

export const StyleDesktopNavWrapper = styled.div`
    display: none;

    ${media.med `
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100vw;
    `}
`;