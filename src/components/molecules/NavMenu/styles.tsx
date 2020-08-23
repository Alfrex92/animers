import styled from "styled-components"
import { space } from "../../../styles/vars"

export const StyleMenuLinkContainer = styled.div`
    height: 50vh;
    margin: ${space.l};
    min-height: 375px;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        height: 100%;
        justify-content: space-evenly;
        min-height: 10vh;
        min-width: 40%;
    }
`;