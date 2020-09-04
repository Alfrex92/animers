import React from 'react'
import { StyleScrollingGridWrapper, StyleGridUL, StyleGridLI } from "./styles"
import HorizontalScrollChild from "../../atoms/GalleryImage"
import data from "../../../../config/translations/en.json"

const ScrollingGrid = () => {
    return (
        <StyleScrollingGridWrapper>
            <StyleGridUL>
                {data.gallery.map(galleryImage => (
                    <StyleGridLI>
                        <HorizontalScrollChild image={galleryImage.url} alt={galleryImage.alt} key={galleryImage.id} />
                    </StyleGridLI>
                ))}
            </StyleGridUL>
        </StyleScrollingGridWrapper>
    )
}

export default ScrollingGrid