import styled from "styled-components"
import { colors, space, fsize, fweight } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleSubtitleWrapper = styled.div`
  margin: ${space.m} auto;
  text-align: center;

  ${media.med`
        margin: ${space.l} auto;
    `}
`

export const StyleSubtitleContent = styled.p`
  color: ${colors.gray.darker};
  font-size: ${fsize.big};
  font-weight: ${fweight.w7};
`
