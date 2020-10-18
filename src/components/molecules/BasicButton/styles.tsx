import styled from "styled-components"
import { colors, fsize, fweight } from "../../../styles/vars"

export const StyleBasicButton = styled.button<{ buttonColor: string, textColor: string, hasBorder: boolean }>`
  background-color: ${props => props.buttonColor};
  border: 2px solid ${props => props.hasBorder === true ? props.textColor : "transparent"};
  border-radius: 50px;
  color: ${props => props.textColor};
  font-size: ${fsize.big};
  font-weight: ${fweight.w7};
  height: 40px;
  margin-left: 5px;
  width: 100px;
`

