import React from "react"
import { StyleSubtitleWrapper, StyleSubtitleContent } from "./styles"

interface CoCBoldSubtitleInterface {
  content: string
}

const CoCBoldSubtitle: React.FC<CoCBoldSubtitleInterface> = (
  props: CoCBoldSubtitleInterface
) => {
  return (
    <StyleSubtitleWrapper>
      <StyleSubtitleContent>{props.content}</StyleSubtitleContent>
    </StyleSubtitleWrapper>
  )
}

export default CoCBoldSubtitle
