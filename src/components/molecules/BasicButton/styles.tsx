import styled from "styled-components"
import { colors, fsize, fweight } from "../../../styles/vars"

export const StyleBasicButton = styled.button`
    background-color: ${colors.red.normal};
    border-radius: 50px;
    color: #fff;
    font-size: ${fsize.big};
    font-weight: ${fweight.w7};
    height: 40px;
    margin-left: 5px;
    width: 100px;
`;

export const StyleWhiteRedButton = styled(StyleBasicButton)`
    background-color: #fff;
    color: ${colors.red.normal};
`;

export const StyleWhiteBlueButton = styled(StyleBasicButton)`
    background-color: #fff;
    border: 2px solid ${colors.blue.light};
    color: ${colors.blue.light};
`;