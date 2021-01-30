import styled from "styled-components"
import { media } from "../../../styles/breakpoints"

export const StyledCoCPageWrapper = styled.div `
  width: 100vw;
`;

export const StyledCoCPageWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  text-align: center;
  max-width: 95vw;

  ${media.large `
      max-width: 70vw;
  `}
`
