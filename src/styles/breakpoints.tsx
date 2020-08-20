import { css } from "styled-components"

const sizes = {
  small: 400,
  med: 768,
  large: 992,
  extra: 1200,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(literals, ...placeholders)}
    }
  `
  return acc
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>)
