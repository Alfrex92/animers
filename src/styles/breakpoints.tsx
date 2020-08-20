/**
 * @constant
 */

const sizeEms = {
  small: 400 / 16,
  md: 768 / 16,
  lg: 992 / 16,
  xl: 1366 / 16,
}

const size = {
  sm: `${sizeEms.small}em`,
  md: `${sizeEms.md}em`,
  lg: `${sizeEms.lg}em`,
  xl: `${sizeEms.xl}em`,
}

/**
 * @param {{
 * sm: string,
 * md: string,
 * lg: string,
 * xl: string
 * }} size
 */

export const media = (Object.keys(size) as Array<keyof typeof size>).reduce(
  (acc, key) => {
    acc[key] = (style: string) =>
      `@media (min-width: ${size[key]}) { ${style} }`
    return acc
  },
  {} as { [index: string]: any }
)
