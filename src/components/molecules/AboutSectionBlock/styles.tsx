import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { colors, space, fsize, fweight } from "../../../styles/vars"

export const StyleSectionBlockContainer = styled.div`
  background-color: #fbf5f5;
  padding: ${space.s};
  text-align: center;

  ${media.large `
    font-size: ${fsize.bigger};
  `}
`
