import styled from "styled-components"
import { colors, fsize, fweight, zindex, space } from "../../../styles/vars"



export const StyleFAQQuestion = styled.p`
    font-size: ${fsize.normal};
    font-weight: ${fweight.w7};
    min-height: 50%;
    margin: 0;
    padding: ${space.s} 0;
`;

export const StyleFAQAnswer = styled(StyleFAQQuestion) <{ open: boolean }>`
    color: red;
    display: block;
    height: ${props => props.open ? '25px' : '10px'};
    opacity: ${props => props.open ? '1' : '0'};
    transform: ${props => props.open ? 'translateY(10px)' : 'translateY(0)'};
    transition: height 0.75s ease-in-out, transform 0.75s ease-in-out;
`;
export const StyleFAQItemWrapper = styled.div<{ open: boolean }>`
    border: 1px solid ${colors.green.normal};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${space.s};
    max-height: ${props => props.open ? "100px" : "25px"};
    padding: ${space.m} ${space.s};
    position: relative;
    text-align: center;
`;