import styled from "styled-components"
import { colors, fsize, fweight } from "../../../styles/vars"

export const StyleBasicButton = styled.button`
    background-color: ${colors.red.normal};
    border-radius: 50px;
    color: ${colors.white.normal};
    font-size: ${fsize.big};
    font-weight: ${fweight.w7};
    height: 40px;
    margin-left: 5px;
    width: 100px;

    ${ props => props.color === "whiteBlue" && `
        background-color: ${colors.white.normal};
        border: 2px solid ${colors.blue.light};
        color: ${colors.blue.light};
    `}
    ${ props => props.color === "whiteRed" && `
        background-color: ${colors.white.normal};
        color: ${colors.red.normal};
    `}
`;

export const StyleWhiteRedButton = styled(StyleBasicButton)`
    background-color: ${colors.white.normal};
    color: ${colors.red.normal};
`;

export const StyleWhiteBlueButton = styled(StyleBasicButton)`
    background-color: ${colors.white.normal};
    border: 2px solid ${colors.blue.light};
    color: ${colors.blue.light};
`;