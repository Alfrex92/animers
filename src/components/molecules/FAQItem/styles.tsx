import styled from "styled-components"
import { colors, fsize, fweight, zindex } from "../../../styles/vars"



export const StyleFAQQuestion = styled.p`
    font-size: ${fsize.normal};
    font-weight: ${fweight.w7};
`;

export const StyleFAQAnswer = styled(StyleFAQQuestion) <{ open: boolean }>`
    color: black;
    display: block;
    height: ${props => props.open ? '100%' : '0px'};
    opacity: ${props => props.open ? '1' : '0'};
    transform: ${props => props.open ? 'translateY(20px)' : 'translateY(0)'};
    transition: height 0.5s ease-in-out, transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    width: 100%;
`;
export const StyleFAQItemWrapper = styled.div`
    border: 2px solid ${colors.green.light};
    height: 1.5rem;
    max-width: 200px;
    position: relative;
    text-align: center;
    width: 100%;
`;