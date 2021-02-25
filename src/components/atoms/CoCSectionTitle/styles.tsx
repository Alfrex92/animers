import styled from "styled-components"
import { colors, space, fsize, fweight } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleSectionTitleWrapper = styled.div`
  margin: ${space.m} auto;
  text-align: center;

  ${media.med`
        margin: ${space.l} auto;
    `}
`

export const StyleSectionTitleContent = styled.p`
  color: ${colors.gray.darker};
  font-size: ${fsize.bigger};
  font-weight: ${fweight.w5};
`
