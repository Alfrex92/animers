import styled from "styled-components"
import { colors, space, zindex } from "../../../styles/vars"

export const StyleMobileNavWrapper = styled.div`
    align-items: center;
    background-color: ${colors.white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: ${space.xl3};
    width: 100vw;
`;

export const StyleLanguageBurgerWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
`;