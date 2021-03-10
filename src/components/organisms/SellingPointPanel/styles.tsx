import styled from "styled-components";
import { space, colors } from "../../../styles/vars";
import { media } from "../../../styles/breakpoints";


export const StyleSellingPointPanelWrapper = styled.div`
    align-content: center;
    align-items: center;
    background-color: ${colors.gray.medium[75]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${space.m} 0;
    padding: 0 0 ${space.s} 0;
`;

export const StyleSellingPointContentWrapper = styled.div`
    margin-bottom: ${space.m};
    text-align: center;
    min-width: 50%;

    ${media.med `
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        min-width: 90%;
    `}

    ${media.large `
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: ${space.s};
        min-width: 60%;
    `}
`;