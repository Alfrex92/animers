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
        <StyleImg width={175} height={75} applyAspectRatio src={props.image}></StyleImg>
    )
}

export default HeroImage