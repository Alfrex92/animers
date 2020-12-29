import styled from "styled-components"
import {colors, fweight, fsize, space} from "../../../styles/vars"
import {media} from "../../../styles/breakpoints"

export const StyleHeroMessageWrapper = styled.div `
    background-color: ${colors.red.normal};
    color: ${colors.white.normal};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 100%;
    padding: ${space.s} ${space.m} ${space.m} ${space.m};
    position: relative;
    text-align: center;

    ${media.med `
        position: absolute;
        left: 0;
        min-height: 200px;
        max-width: 350px;
        top: 10%;
        z-index: 999;
    `}
`;

export const StyleHeroMessage = styled.p `
    font-size: ${fsize.bigger2};
    font-weight: ${fweight.w9};
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