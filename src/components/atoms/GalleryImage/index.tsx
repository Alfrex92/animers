import React from 'react'
import { StyleGalleryImage, StyleHorizontalScrollChild } from "./styles"

interface GalleryImageInterface {
    image: string
    alt: string
}

const HorizontalScrollChild: React.FC<GalleryImageInterface> = (
    props: GalleryImageInterface
) => {
    return (
        <StyleHorizontalScrollChild>
            <StyleGalleryImage  src={props.image} alt={props.alt}/>
       </StyleHorizontalScrollChild>
    )
}

export default HorizontalScrollChild

