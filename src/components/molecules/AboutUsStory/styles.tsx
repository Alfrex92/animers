import styled from "styled-components"
import { space, fsize, fweight } from "../../../styles/vars"

export const StyleAboutUsStoryWrapper = styled.div`
  padding: ${space.m} 0;
`

export const StyleBasicParagraph = styled.p`
  margin: ${space.s} auto;
  text-align: left;
`

export const StyleFeatureQuote = styled.div`
  font-style: italic;
  font-size: ${fsize.big};
  font-weight: ${fweight.w3};
  text-align: center;
`

export const StyleFeatureQuotePink = styled(StyleFeatureQuote)`
  background-color: #fbf5f5;
  font-style: normal;
`
