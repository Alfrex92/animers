import styled from "styled-components"
import { media } from "../../../styles/breakpoints"


export const StyleMemberInfoBlock = styled.div`
    display: block;
    min-height: 100px;
    min-width: 100px;
`;

export const StyleMembersWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    ${media.med `
        flex-direction: row;
    `}
`;