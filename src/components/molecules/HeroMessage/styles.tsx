import styled from "styled-components"
import {colors, fweight, fsize, space} from "../../../styles/vars"
import {media} from "../../../styles/breakpoints"

export const StyleHeroMessageWrapper = styled.div `
    background-color: ${colors.red.normal};
    color: ${colors.white.normal};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 400px;
    padding: ${space.m};
    text-align: center;

    ${media.med `
        position: absolute;
        left: 0;
        top: 50%;
    `}
`;

export const StyleHeroMessage = styled.p `
    font-size: ${fsize.big};
    font-weight: ${fweight.w6};
    margin: ${space.m} auto;

    ${media.med `
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w8};
    `}
`;

export const StyleButtonContainer = styled.div `
    margin: auto;
    max-width: 40%;
`;