import styled from "styled-components"
import { space } from "../../../styles/vars"

export const StyleImageGallery = styled.div`
    border: 2px solid red;
    display: flex;
    flex-direction: row;
    height: 300px;
    margin: ${space.l} 0 ${space.l} 0; 
    overflow: hidden;
    position: relative;
    width: 1000px;
`;

export const StyleHorizontalScrollWrapper = styled.div`
    height: 100%;
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
`;