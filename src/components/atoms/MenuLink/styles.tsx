import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { colors, space, fsize } from "../../../styles/vars"

export const StyleNavMenuLink = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    min-height: 100px;
    text-align: center;

    &:active {
        background-color: ${colors.gray.lighter}
    }
`;

export const StyleLinkName = styled.span`
    color: ${colors.gray.darker};
    font-size: ${fsize.bigger};
    margin: auto;
    text-align: center;
    text-decoration: none;  
`;