import React from 'react'
import { StyleImageGallery, StyleHorizontalScrollWrapper } from "./styles"
import HorizontalScrollChild from "../../atoms/GalleryImage"

interface ImageGalleryInterface {
    images: GalleryImageInterface[]
}

interface GalleryImageInterface {
    alt: string
    url: string
    id: string
}

const ImageGallery: React.FC<ImageGalleryInterface> = (
    props: ImageGalleryInterface
) => {
    return (
        <StyleImageGallery>
        <StyleHorizontalScrollWrapper>
            {props.images.map(galleryImage => (
                <HorizontalScrollChild image={galleryImage.url} alt={galleryImage.alt} key={galleryImage.id} />
            ))}
        </StyleHorizontalScrollWrapper>
        </StyleImageGallery>
    )
}

export default ImageGallery