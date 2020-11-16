import React from 'react'
import {StyleHeroWrapper} from "./styles"
import HeroImage from "../../atoms/HeroImage"
import HeroMessage from "../../molecules/HeroMessage"

interface HeroInterface {
    image: string;
    alt: string;
    heroMessageProps: HeroMessageInterface
}

interface BasicButtonInterface {
    children: any
    buttonColor: string
    hasBorder: boolean
    textColor: string
}

interface HeroMessageInterface {
    textContent: string;
    buttonProps: BasicButtonInterface;
}

const Hero: React.FC<HeroInterface> = (
    props: HeroInterface
) => {
    return (
        <StyleHeroWrapper>
            <HeroMessage textContent={props.heroMessageProps.textContent} buttonProps={props.heroMessageProps.buttonProps}/>
            <HeroImage image={props.image} alt={props.alt}/>            
        </StyleHeroWrapper>
    )
}

export default Hero