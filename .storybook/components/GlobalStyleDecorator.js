import React from "react"

const GlobalStyleDecorator = storyFn => (
  <>
    <div style={{ padding: "1rem" }}>{storyFn()}</div>
  </>
)

export default GlobalStyleDecorator
