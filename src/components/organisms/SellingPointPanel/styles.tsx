import styled from "styled-components"
import { space } from "../../../styles/vars"


export const StyleSellingPointPanelWrapper = styled.div`
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
`;

export const StyleSellingPointContentWrapper = styled.div`
    margin-bottom: ${space.m};
    text-align: center;
    min-width: 60%; //@@@ I can't get it to center properly unless I define min-width. Is that OK, or is there a better way?
`;