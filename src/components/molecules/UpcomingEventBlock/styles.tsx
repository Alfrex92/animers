import styled from "styled-components"
import {colors, space} from "../../../styles/vars"

export const StyleUpcomingEventWrapper = styled.div `
    background-color: ${colors.white.normal};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${space.m} 0;
    position: relative;
`;

export const StyleUpcomingEventInner = styled.div `
    background-color: ${colors.red.normal};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${space.s};
`;

export const StyleUpcomingEventInnerLeft = styled.div `
    align-content: center;
    align-items: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const StyleUpcomingEventInnerRight = styled.div `
    align-content: flex-end;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

