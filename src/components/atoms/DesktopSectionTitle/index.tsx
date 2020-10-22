import React from 'react'
import { StyleDesktopSectionTitleWrapper, StyleDesktopSectionTitleContent } from "./styles"

interface DesktopSectionTitleInterface {
    title: string;
}

const DesktopSectionTitle: React.FC<DesktopSectionTitleInterface> = (
    props: DesktopSectionTitleInterface
) => {
    return (
        <StyleDesktopSectionTitleWrapper>
            <StyleDesktopSectionTitleContent>{props.title}</StyleDesktopSectionTitleContent>
        </StyleDesktopSectionTitleWrapper>
    )
}

export default DesktopSectionTitle
