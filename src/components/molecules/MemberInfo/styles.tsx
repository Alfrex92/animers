import styled from "styled-components"

import { SimpleImg } from "react-simple-img"

export const StyleMemberInfo = styled.div``

export const StyleRole = styled.p``

export const StyleName = styled.p`
  font-size: 18px;
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
