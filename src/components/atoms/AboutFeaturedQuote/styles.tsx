import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { colors, space, fsize, fweight } from "../../../styles/vars"

export const StyleQuoteContainer = styled.div`
  margin: ${space.s} auto;
  text-align: center;

  ${media.med`
        margin: ${space.m} auto;
    `}
`

export const StyleQuoteContent = styled.p`
  color: ${colors.gray.darker};
  font-size: ${fsize.big};
  font-weight: ${fweight.w5};
`
