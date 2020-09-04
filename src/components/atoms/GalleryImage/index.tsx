import React from 'react'
import { SimpleImg } from 'react-simple-img'
import { StyleGalleryImageContainer, StyleGalleryImage, StyleHorizontalScrollChild } from "./styles"

interface GalleryImageInterface {
    image: string
    alt: string
}

const HorizontalScrollChild: React.FC<GalleryImageInterface> = (
    props: GalleryImageInterface
) => {
    return (
        <StyleHorizontalScrollChild>
            <StyleGalleryImage width={400} height={400} applyAspectRatio src={props.image} />
        </StyleHorizontalScrollChild>
    )
}

export default HorizontalScrollChild