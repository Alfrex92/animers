import styled from "styled-components";
import { colors } from "../../../styles/vars";
import { Link } from "gatsby";


export const StyleLogoContainer = styled.h1`
    margin: 0;
`;

export const StyleLogo = styled(Link)`
    text-decoration: none;
`;

export const StyleLinkName = styled.span`
    color: ${colors.red.normal};
`;