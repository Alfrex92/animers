import styled from "styled-components";
import { space, fsize, fweight } from "../../../styles/vars";
import { media } from "../../../styles/breakpoints";

export const StyleAboutUsStoryWrapper = styled.div`
  padding: ${space.m} 0;
`

export const StyleBasicParagraph = styled.p`
  margin: ${space.s} auto;
  padding: 0 ${space.s};
  text-align: left;

  ${media.large `
    font-size: ${fsize.bigger};
  `}
`

export const StyleFeatureQuote = styled.div`
  font-style: italic;
  font-size: ${fsize.big};
  font-weight: ${fweight.w3};
  text-align: center;

  ${media.large `
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w5};
    margin: ${space.m};
    padding: ${space.s} 0;
  `}
`

export const StyleFeatureQuotePink = styled(StyleFeatureQuote)`
  background-color: #fbf5f5;
  font-style: normal;

  ${media.large `
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w5};
  `}
`
