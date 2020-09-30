import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"


export const StyleFAQSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${space.m} auto;
    

    ${media.med`
        align-content: center;
        flex-wrap: wrap;
        max-height: 70vh;
        width: 60vw;
    `}
`;