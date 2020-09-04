import React from 'react'
import SiteSectionTitle from "../../atoms/SiteSectionTitle"
import ImageGallery from "../../molecules/ImageGallery"
import { StylePhotoGalleryWrapper } from "./styles"

const PhotoGallery = () => {
    return (
        <StylePhotoGalleryWrapper>
            <SiteSectionTitle sectionTitle={"Photo Gallery"} />
            <ImageGallery />
        </StylePhotoGalleryWrapper>
    )
}

export default PhotoGallery