import styled from "styled-components"
import { colors, fsize } from "../../../styles/vars"

export const StyleCopyrightWrapper = styled.div`
    display: block;
    height: 1.5rem;
    margin: 0.25rem auto;
    width: 100%;
    color: ${colors.red.normal};
    font-size: ${fsize.normal};
`;

export const StyleCopyrightContent = styled.p`
    color: ${colors.red.normal};
    font-size: ${fsize.normal};
`;