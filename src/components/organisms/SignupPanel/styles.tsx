import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleSignupPanelWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 30vh;
    width: 100vw;
`;

export const StyleContentWrapper = styled.div`
    margin-bottom: ${space.m};
    padding-left: 12.5%;
    text-align: center;
    width: 75%;

    ${media.large`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    `} 
`;