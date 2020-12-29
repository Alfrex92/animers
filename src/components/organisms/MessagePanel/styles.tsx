import styled from "styled-components"
import { colors, space } from "../../../styles/vars"


export const MessagePanelWrapper = styled.div`
    align-items: center;
    background-color: ${colors.gray.medium[75]};
    display: flex;
    flex-direction: column;
    min-height: 150px;
    justify-content: space-between;
    padding-bottom: ${space.s};
    text-align: center;
`;
