import styled from "styled-components"
import {colors, fsize, fweight, space} from "../../../styles/vars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const StyleDateTimeWrapper = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
`;

export const StyleDateTime = styled.p `
    color: ${colors.white.normal};
    font-size: ${fsize.small};
    font-weight: ${fweight.w1};
`;

export const StyleFAIcon = styled(FontAwesomeIcon)`
    font-size: ${fsize.big};
    margin: 0 ${space.s}
`;