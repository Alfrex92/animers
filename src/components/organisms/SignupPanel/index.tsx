import React from "react"
import HPCBlockTitle from "../../atoms/HPCBlockTitle"
import BasicButton from "../../molecules/BasicButton"
import HPCNumberListItem from "../../molecules/HPCNumberListItem"

import { StyleSignupPanelWrapper, StyleContentWrapper } from "./styles"

interface SignupPanelInterface {
  blockTitle: string
  buttonProps: ButtonInterface
  signUpSteps: SignupStepInterface[]
}

interface SignupStepInterface {
  id: string;
  stepNum: string;
  title: string;
  subtitle: string;
}

interface ButtonInterface {
  buttonColor: string;
  textColor: string;
  hasBorder: boolean;
  children: any;
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
        buttonColor={props.buttonProps.buttonColor}
        textColor={props.buttonProps.textColor}
        children={props.buttonProps.children}
        hasBorder={props.buttonProps.hasBorder}
      />
    </StyleSignupPanelWrapper>
  )
}

export default SignupPanel
