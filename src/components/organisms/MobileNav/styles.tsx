import styled from "styled-components"
import { colors, space, zindex } from "../../../styles/vars"

import {media} from "../../../styles/breakpoints"

export const StyleMobileNavWrapper = styled.div`
    align-items: center;
    background-color: ${colors.white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: ${space.xl3};
    width: 100vw;

    ${media.med `
        display: none;
    `}
`;

export const StyleLanguageBurgerWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
`;