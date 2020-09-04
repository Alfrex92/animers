import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import PhotoGallery from "./index"

const story = storiesOf("Organisms | PhotoGallery", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
//Wrapper component for Photo Gallery
story.add("Component", () => (
    <PhotoGallery />
))