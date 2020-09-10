import React from 'react'
import data from "../../../../config/translations/en.json"
import HPCBlockTitle from "../../atoms/HPCBlockTitle"
import BasicButton from "../../molecules/BasicButton"
import HPCNumberListItem from "../../molecules/HPCNumberListItem"

import { StyleSignupPanelWrapper, StyleContentWrapper } from "./styles"

interface SignupPanelInterface {
    blockTitle: string;
    buttonColor: string;
    children: any;
}

const listItems = data.signupSteps;

const SignupPanel: React.FC<SignupPanelInterface> =
    (props: SignupPanelInterface) => {
        return (
            <StyleSignupPanelWrapper>
                <HPCBlockTitle title={props.blockTitle} />
                <StyleContentWrapper>
                    {listItems.map(item => (
                        <HPCNumberListItem numContent={item.stepNum} liTitle={item.title} liContent={item.subtitle} key={item.id} />
                    ))}
                </StyleContentWrapper>
                <BasicButton buttonColor={props.buttonColor} children={props.children} />
            </StyleSignupPanelWrapper>
        )
    }

export default SignupPanel