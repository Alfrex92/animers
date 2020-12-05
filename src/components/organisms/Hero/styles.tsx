import styled from "styled-components"
import {media} from "../../../styles/breakpoints"
import {space} from "../../../styles/vars"


export const StyleHeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${space.l} 0;
    padding: 0;

    ${media.med `
        display: block;
    `}
`;