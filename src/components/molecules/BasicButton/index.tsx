import React from "react"
import { StyleBasicButton } from "./styles"

interface BasicButtonInterface {
  children: any
  buttonColor: string
  hasBorder: boolean
  textColor: string
}

const BasicButton: React.FC<BasicButtonInterface> = (
  props: BasicButtonInterface
) => {
  return (
    <StyleBasicButton
      buttonColor={props.buttonColor}
      textColor={props.textColor}
      hasBorder={props.hasBorder}
    >
      {props.children}
    </StyleBasicButton>
  )
}

export default BasicButton
