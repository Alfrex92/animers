import React from 'react'
import { StyleBasicButton } from "./styles"
import { colors, fsize, fweight } from "../../../styles/vars"

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
        <StyleBasicButton color={props.buttonColor}>{props.children}</StyleBasicButton>
    )
}

export default BasicButton