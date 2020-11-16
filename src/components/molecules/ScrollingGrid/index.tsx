import React from 'react'
import { StyleScrollingGridWrapper, StyleGridUL, StyleGridLI } from "./styles"
import HorizontalScrollChild from "../../atoms/GalleryImage"

interface ScrollingGridInterface {
    imageGallery: GalleryImageInterface[]
}

interface GalleryImageInterface {
    id: string;
    url: string;
    alt: string;
}

const ScrollingGrid: React.FC<ScrollingGridInterface> = (
    props: ScrollingGridInterface
) => {
    return (
        <StyleScrollingGridWrapper>
            <StyleGridUL>
                {props.imageGallery.map(galleryImage => (
                    <StyleGridLI>
                        <HorizontalScrollChild image={galleryImage.url} alt={galleryImage.alt} key={galleryImage.id} />
                    </StyleGridLI>
                ))}
            </StyleGridUL>
        </StyleScrollingGridWrapper>
    )
}

export default ScrollingGrid