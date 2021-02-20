import styled from "styled-components"
import {colors, fsize, fweight, space} from "../../../styles/vars"

export const StyleTeamMemberNameWrapper = styled.div `
    margin: auto ${space.s};
`;

export const StyleTeamMemberName = styled.p `
    color: ${colors.blue.darker};
    font-size: ${fsize.normal};
    font-weight: ${fweight.w6};
    text-decoration: underline;
`;