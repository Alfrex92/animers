import React from "react"
import "../../src/styles/base.css"
import "../../src/styles/normalize.css"

const GlobalStyleDecorator = storyFn => (
  <>
    <div style={{ padding: "1rem" }}>{storyFn()}</div>
  </>
)

export default GlobalStyleDecorator
