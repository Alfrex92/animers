import styled from "styled-components"
import { space, colors } from "../../../styles/vars"


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
    min-width: 60%; //@@@ I can't get it to center properly unless I define min-width. Is that OK, or is there a better way?
`;