import styled from "styled-components"
import { colors, fsize, space } from "../../../styles/vars"


export const StyleBackArrowContainer = styled.div`
    display: flex;
    justify-content: left;
    padding-left: ${space.m};
    width: 25%;
`;

export const StyleBackArrowIcon = styled.a`
    color: ${colors.red.normal};
    font-size: ${fsize.normal};
`;