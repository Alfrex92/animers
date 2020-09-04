import styled from "styled-components"

export const StyleScrollingGridWrapper = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr 20px;

    & > * {
        grid-column: 2 / -2;
    }

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

export const StyleGridUL = styled.ul`
    display: grid;
    grid-gap: 10px;
    grid-template-columns:
    10px
    repeat(6, calc(50% - 40px))
    10px;
  grid-template-rows: minmax(150px, 1fr);
    &::before,
    &::after {
        content: ‘’;
    }
`;

export const StyleGridLI = styled.li`
      scroll-snap-align: center;
  padding: calc(var(--gutter) / 2 * 1.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  transform: rotate(-90deg);
  transform-origin: right top;
`;