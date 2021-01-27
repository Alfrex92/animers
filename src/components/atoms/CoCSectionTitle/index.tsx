import React from "react"
import { StyleSectionTitleWrapper, StyleSectionTitleContent } from "./styles"

interface CoCSectionTitleInterface {
  content: string | null
}

const CoCSectionTitle: React.FC<CoCSectionTitleInterface> = (
  props: CoCSectionTitleInterface
) => {
  return (
    <StyleSectionTitleWrapper>
      <StyleSectionTitleContent>{props.content}</StyleSectionTitleContent>
    </StyleSectionTitleWrapper>
  )
}

export default CoCSectionTitle
