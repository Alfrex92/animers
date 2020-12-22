import styled from 'styled-components'
import { colors, zindex, space } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleBurger = styled.button<{ open: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${space.xl};
  justify-content: space-around;
  margin: 0 0 0 ${space.m};
  padding: 0;
  width: ${space.xl3};
  z-index: ${zindex.menuclose};
  
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
    height: ${space.xs};
    position: relative;
    transition: all 0.3s linear;
    transform-origin: 1px;
    width: 2rem;

    :first-child {
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
      width: ${props => props.open ? '2.2rem' : '1.75rem'};
    }

    :nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
      transform: ${props => props.open ? 'translateX(20px)' : 'translateX(0)'};
      width: 1.75rem;
    }

    :nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
      width: ${props => props.open ? '2.2rem' : '1.5rem'};
    }
`;
