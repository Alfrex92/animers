/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import "./styles/normalize.css"
import "./styles/base.css"

export const wrapRootElement = ({ element }) => {
  return <div id="wrapRootElement">{element}</div>
}
