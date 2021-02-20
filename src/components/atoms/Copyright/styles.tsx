import styled from "styled-components"
import { colors, fsize, space } from "../../../styles/vars"

export const StyleCopyrightWrapper = styled.div`
    background-color: #fff;
    display: block;
    height: 1.5rem;
    margin-bottom: ${space.l};
    padding: 0 ${space.xs};
    width: 100%;
    color: ${colors.red.normal};
    font-size: ${fsize.normal};
`;

export const StyleCopyrightContent = styled.p`
    color: ${colors.red.normal};
    font-size: ${fsize.normal};
`;