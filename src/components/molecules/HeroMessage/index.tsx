import React from 'react'
import BasicButton from '../BasicButton'
import {StyleHeroMessageWrapper, StyleHeroMessage} from "./styles"

interface HeroMessageInterface {
    textContent: string;
    buttonProps: BasicButtonInterface
}

interface BasicButtonInterface {
    children: any
    buttonColor: string
    hasBorder: boolean
    textColor: string
}

const HeroMessage: React.FC<HeroMessageInterface> = (
    props: HeroMessageInterface
) => {
    return (
        <StyleHeroMessageWrapper>
                <StyleHeroMessage>{props.textContent}</StyleHeroMessage>
            <BasicButton buttonColor={props.buttonProps.buttonColor} textColor={props.buttonProps.textColor} hasBorder={props.buttonProps.hasBorder} children={props.buttonProps.children}/>
        </StyleHeroMessageWrapper>
    )
}

export default HeroMessage