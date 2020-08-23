import React from 'react'
import { StyleBasicButton, StyleWhiteRedButton, StyleWhiteBlueButton } from "./styles"

interface BasicButtonInterface {
    buttonText: string,
    buttonColor: string
}

function getButtonColor(buttonColor: string, buttonText: string) {
    switch (buttonColor) {
        case "basic":
            return <StyleBasicButton>{buttonText}</StyleBasicButton>
        case "whiteRed":
            return <StyleWhiteRedButton>{buttonText}</StyleWhiteRedButton>
        case "whiteBlue":
            return <StyleWhiteBlueButton>{buttonText}</StyleWhiteBlueButton>
    }
}

const BasicButton: React.FC<BasicButtonInterface> = (
    props: BasicButtonInterface
) => {
    return (
        <div>{getButtonColor(props.buttonColor, props.buttonText)}</div>
    )
}

export default BasicButton