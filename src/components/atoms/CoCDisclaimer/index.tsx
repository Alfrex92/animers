import React from "react"
import { StyleDisclaimerWrapper, StyleDisclaimerContent } from "./styles"

interface CoCDisclaimerInterface {
  disclaimerContent: string
}

const CoCDisclaimer: React.FC<CoCDisclaimerInterface> = (
  props: CoCDisclaimerInterface
) => {
  return (
    <StyleDisclaimerWrapper>
      <StyleDisclaimerContent>{props.disclaimerContent}</StyleDisclaimerContent>
    </StyleDisclaimerWrapper>
  )
}

export default CoCDisclaimer
