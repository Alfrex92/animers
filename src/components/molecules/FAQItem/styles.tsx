import styled from "styled-components"
import { colors, fsize, fweight, zindex, space } from "../../../styles/vars"



export const StyleFAQQuestion = styled.p`
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w7};
    margin: 0;
    padding: 0;
`;

export const StyleFAQAnswer = styled(StyleFAQQuestion) <{ open: boolean }>`
    color: red;
    display: block;
    height: ${props => props.open ? '25px' : '0px'};
    opacity: ${props => props.open ? '1' : '0'};
    transform: ${props => props.open ? 'translateY(10px)' : 'translateY(0)'};
    transition: height 0.75s ease-in-out, transform 0.75s ease-in-out;
`;
export const StyleFAQItemWrapper = styled.div<{ open: boolean }>`
    align-items: center;
    border: 1px solid ${colors.green.normal};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${props => props.open ? '25vh' : '8vh'};
    margin-bottom: ${space.s};
    padding: ${props => props.open ? `${space.m} ${space.s}` : '0'};
    position: relative;
    text-align: center;
`;