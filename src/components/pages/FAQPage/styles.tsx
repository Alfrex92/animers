import styled from "styled-components"
import { space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"


export const StyleFAQSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${space.m} auto;
    width: 90vw;
    

    ${media.med`
        height: 40vh;
        flex-wrap: wrap;
        width: 60vw;
    `}
`;