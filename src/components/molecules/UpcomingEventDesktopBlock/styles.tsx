import styled from "styled-components"
import {media} from "../../../styles/breakpoints"

export const StyleEventDesktopBlockWrapper = styled.div `
    align-items: center;
    align-content: center;
    display: none;
    flex-direction: column;
    justify-content: center;

    ${media.med`
        display: flex;
        margin-top: 20px;
    `}
`;