import styled from "styled-components"
import { colors } from "../../../styles/vars"

export const StyleMobileNavWrapper = styled.div`
    align-items: center;
    background-color: ${colors.white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 2rem;
    width: 100vw;
    z-index: 999;
`;

export const StyleLanguageBurgerWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
`;