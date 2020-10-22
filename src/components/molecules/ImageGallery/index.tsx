import React from 'react'
import { StyleHorizontalScrollWrapper } from "./styles"
import HorizontalScrollChild from "../../atoms/GalleryImage"
import data from "../../../../config/translations/en.json"

const ImageGallery = () => {
    return (
        <StyleHorizontalScrollWrapper>
            {data.gallery.map(galleryImage => (
                <HorizontalScrollChild image={galleryImage.url} alt={galleryImage.alt} key={galleryImage.id} />
            ))}
        </StyleHorizontalScrollWrapper>
    )
}

export default ImageGallery