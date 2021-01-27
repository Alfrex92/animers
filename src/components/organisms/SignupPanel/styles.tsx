import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleSignupPanelWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyleContentWrapper = styled.div`
    margin-bottom: ${space.m};
    padding: 0 ${space.xl} 0 ${space.l};
    text-align: center;

    ${media.med`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        min-width: 90%;
    `} 
`;