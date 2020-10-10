import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { colors, space, fsize, fweight } from "../../../styles/vars"

export const StyleSectionContainer = styled.div`
  margin: ${space.m} auto;
  text-align: center;

  ${media.med`
        margin: ${space.l} auto;
    `}
`

export const StyleSectionContent = styled.p`
  color: ${colors.black.normal};
  font-size: ${fsize.bigger};
  font-weight: ${fweight.w8};
`
