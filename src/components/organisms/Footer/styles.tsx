import styled from "styled-components"
import { zindex } from "../../../styles/vars"

export const StyleFooterWrapper = styled.div`
    align-items: center;
    align-self: flex-end;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 20vh;
    justify-content: space-around;
    margin: auto;
    text-align: center;
    z-index: ${zindex.modal}
`;