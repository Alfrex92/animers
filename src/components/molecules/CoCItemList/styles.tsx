import styled from "styled-components"
import { colors, space, fsize, fweight } from "../../../styles/vars"
import { media } from "../../../styles/breakpoints"

export const StyleItemListWrapper = styled.div`
  margin: ${space.m} auto;
  text-align: left;

  ${media.med`
        margin: ${space.l} auto;
    `}
`

export const StyleItemList = styled.ul`
  list-style: "-" inside none;
`

export const StyleItem = styled.li`
  color: ${colors.gray};
  font-size: ${fsize.normal};
  list-style: "-" inside none;
`
