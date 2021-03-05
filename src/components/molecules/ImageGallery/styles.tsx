import styled from "styled-components";
import { space } from "../../../styles/vars";
import {media} from "../../../styles/breakpoints";

export const StyleImageGallery = styled.div`
    margin: ${space.m} 0;
    max-width: 100%;
    overflow: hidden;
    ${media.med `
        margin: 0;
        width: 100%;
    `}
`;

export const StyleHorizontalScrollWrapper = styled.div`
    height: 800px;
    margin: ${space.l} 0 -350px 0;
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;
    transform:rotate(-90deg) translateY(-400px);
    transform-origin: right top;
    width: 400px;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar-track {
        box-shadow: none;
        -webkit-box-shadow: none !important;
        background-color: transparent;
    }
    ::-webkit-scrollbar {
        width: 3px !important;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
    ${media.med `
    margin-left: 18rem;
    `}
`;