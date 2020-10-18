import React from "react"
import HPCBlockTitle from "../../atoms/HPCBlockTitle"
import BasicButton from "../../molecules/BasicButton"
import HPCNumberListItem from "../../molecules/HPCNumberListItem"

import { StyleSignupPanelWrapper, StyleContentWrapper } from "./styles"

interface SignupPanelInterface {
  blockTitle: string
  buttonColor: string
  textColor: string
  hasBorder: boolean
  children: any
  signUpSteps: SignupStepInterface[]
}

interface SignupStepInterface {
  id: string;
  stepNum: string;
  title: string;
  subtitle: string;
}

const SignupPanel: React.FC<SignupPanelInterface> = (
  props: SignupPanelInterface
) => {
  return (
    <StyleSignupPanelWrapper>
      <HPCBlockTitle title={props.blockTitle} />
      <StyleContentWrapper>
        {props.signUpSteps.map(item => (
          <HPCNumberListItem
            numContent={item.stepNum}
            liTitle={item.title}
            liContent={item.subtitle}
            key={item.id}
          />
        ))}
      </StyleContentWrapper>
      <BasicButton
        buttonColor={props.buttonColor}
        textColor={props.textColor}
        children={props.children}
        hasBorder={props.hasBorder}
      />
    </StyleSignupPanelWrapper>
  )
}

export default SignupPanel
