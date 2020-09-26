import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"


export const StyleFAQBlock = styled.div`
    margin: 0.5rem auto;
    max-width: 90vw;
    width: 100%;

    ${media.med`
        margin: ${space.s} ${space.l};
        width: 600px;
    `}
`;