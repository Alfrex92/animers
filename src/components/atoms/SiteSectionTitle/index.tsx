import React from 'react'
import { StyleSiteSectionTitleWrapper, StyleSiteSectionTitle } from "./styles"

interface SiteSectionTitleInterface {
    sectionTitle: string
}

const SiteSectionTitle: React.FC<SiteSectionTitleInterface> = (
    props: SiteSectionTitleInterface
) => {
    return (
        <StyleSiteSectionTitleWrapper>
            <StyleSiteSectionTitle>{props.sectionTitle}</StyleSiteSectionTitle>
        </StyleSiteSectionTitleWrapper>
    )
}

export default SiteSectionTitle