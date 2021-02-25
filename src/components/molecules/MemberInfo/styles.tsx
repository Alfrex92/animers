import styled from "styled-components"

import { SimpleImg } from "react-simple-img"
import { media } from "../../../styles/breakpoints"
import { space, fsize, fweight, colors } from "../../../styles/vars"

export const StyleMemberInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${space.l};
`

export const StyleName = styled.p`
    color: ${colors.blue.darker};
    font-size: ${fsize.normal};
    font-weight: ${fweight.w6};
    text-decoration: underline;
`

export const StyleRole = styled.p`
  ${media.med`
  margin-top: ${space.m};
  margin-bottom: ${space.m};
  `}
`

export const StyleIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 50px;
  min-width: 100px;
`

export const StyleDescription = styled.p``

export const StyleImg = styled(SimpleImg)`
  img {
    border-radius: 50%;
    object-fit: cover;
  }
`
