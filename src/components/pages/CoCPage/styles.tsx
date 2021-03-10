import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { space } from "../../../styles/vars"

export const StyledCoCPageWrapper = styled.div `
  width: 100vw;
`;

export const StyledCoCPageWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 ${space.s};
  text-align: center;

  ${media.large `
      max-width: 70vw;
  `}
`
