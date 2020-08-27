import styled from 'styled-components'
import { colors, zindex } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleBurger = styled.button<{ open: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  margin: 0 3rem 0 1rem;
  padding: 0;
  width: 2rem;
  z-index: 999;
  
  &:focus {
    outline: none;
  }

  ${media.large`
    display: none;
  `}
`;

export const StyleDiv = styled.div<{ open: boolean }> `
    background: ${colors.red.normal};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transition: all 0.3s linear;
    transform-origin: 1px;
    width: 2rem;

    :first-child {
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
      width: ${props => props.open ? '2rem' : '1.6rem'};
    }

    :nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
      transform: ${props => props.open ? 'translateX(20px)' : 'translateX(0)'};
      width: 1.75rem;
    }

    :nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
      width: ${props => props.open ? '2rem' : '1.5rem'};
    }
`;
