import React from "react"
import {StyleImg} from "./styles"

interface HeroImageInterface {
    image: string;
    alt: string;
}

const HeroImage: React.FC<HeroImageInterface> = (
    props: HeroImageInterface
) => {
    return (
        <StyleImg srcSet={"heroSml.jpg 375w, heroLrg.jpg 1920w"} sizes={"(max-width: 400px) 375px, 1920px"} applyAspectRatio src={props.image} alt={props.alt}></StyleImg>
    )
}

export default HeroImage