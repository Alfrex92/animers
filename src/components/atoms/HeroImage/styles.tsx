import styled from "styled-components"

import { SimpleImg } from "react-simple-img"
import { media } from "../../../styles/breakpoints"
import { space, fsize } from "../../../styles/vars"

export const StyleImg = styled(SimpleImg)`
  img {
      margin: 0;
      padding: 0;

      ${media.med `
        display: block;
        max-height: 100%;
        max-width: 100%;
        position: relative; 
      `}
  }
`