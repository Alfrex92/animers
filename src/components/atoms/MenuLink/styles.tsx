import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { colors, space, fsize } from "../../../styles/vars"

export const StyleNavMenuLink = styled.div`
    align-items: center;
    display: flex;
    min-height: 100px;
    text-align: center;

    &:active {
        background-color: ${colors.gray.lighter}
    }
`;

export const StyleLinkName = styled.p`
    color: ${colors.gray.dark};
    font-size: ${fsize.normal};
    margin: auto;
`;