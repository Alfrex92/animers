import styled from "styled-components";
import { space } from "../../../styles/vars";
import {media} from "../../../styles/breakpoints";

export const StyleImageGallery = styled.div`
    margin: ${space.m} 0;
    width: 100%;
    overflow: hidden;

    ${media.med `
    margin: 0 ${space.m};
    `}
`;

export const StyleHorizontalScrollWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 1000%;
    margin: ${space.l} 0 -350px ;
    padding: 0;
    /* overflow-y: auto; */
    /* overflow-x: hidden; */
    transform:rotate(-90deg) translateY(-400px);
    transform-origin: right top;
    max-width: 50%;

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


`;