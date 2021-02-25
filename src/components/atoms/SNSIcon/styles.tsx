import styled from "styled-components"
import { colors, fsize, space } from "../../../styles/vars"

export const StyleSocialIconCircle = styled.div`
    align-items: center;
    background-color: ${colors.gray.darker};
    border-radius: 50%;
    display: flex;
    height: 26px;
    justify-content: center;
    margin: 0 ${space.s};
    width: 26px;

    &:active, &:hover {
        background-color: ${colors.red.normal}   
    }
`;

export const StyleSocialIconContent = styled.a`
    color: ${colors.white.normal};
    font-size: ${fsize.normal};

    &:active, &:hover {
        color: ${colors.white.normal};
    }
`;