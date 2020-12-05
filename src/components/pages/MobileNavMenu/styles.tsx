import styled from "styled-components"
import { colors, zindex, space } from "../../../styles/vars"

export const StyleMobileNavMenuWrapper = styled.div<{ open: boolean }>`
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;
    left: 0;
    position: absolute;
    width: 100vw;
    text-decoration: none;
    top: 0;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(-110%)'};
    transition: transform 0.5s ease-in-out;
    z-index: ${zindex.menu}
`;