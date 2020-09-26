import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"


export const StyleFAQSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${space.m} auto;
    

    ${media.med`
        height: 70vh;
        flex-wrap: wrap;
        align-content: center;
        width: 60vw;
    `}
`;