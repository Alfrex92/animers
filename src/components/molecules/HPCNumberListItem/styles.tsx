import styled from "styled-components"
import { colors, fsize, fweight, space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleHPCNumberListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 70px;
`;
export const StyleHPCNumberListItem = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${space.m};
`;