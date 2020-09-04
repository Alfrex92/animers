import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { space } from "../../../styles/vars"

export const StylePhotoGalleryWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    height: 1000px;
    justify-content: center;   
    margin: ${space.m} 0 ${space.m} 0;
    padding: 0;
    text-align: center;

    ${media.extra`
        width: 100%;
    `}
`;