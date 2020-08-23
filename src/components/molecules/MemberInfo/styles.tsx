import styled from "styled-components"

import { SimpleImg } from "react-simple-img"
import { media } from "../../../styles/breakpoints"
import { space, fsize } from "../../../styles/vars"

export const StyleMemberInfo = styled.div``

export const StyleRole = styled.p`
  ${media.med`
  margin-top: ${space.m};
  margin-bottom: ${space.m};
  `}
`

export const StyleName = styled.p`
  font-size: ${fsize.big};
`

export const StyleIconContainer = styled.div``

export const StyleDescription = styled.p``

export const StyleImg = styled(SimpleImg)`
  img {
    /*
  Here you give styles to the image
   */
    border-radius: 50%;
    object-fit: cover;
  }
`
