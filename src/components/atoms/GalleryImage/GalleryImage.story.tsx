import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import GalleryImage from "./index"

const story = storiesOf("Atoms | GalleryImage", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
// Single image for image gallery
story.add("Component", () => (
    <GalleryImage image={data.gallery[0].url} alt={data.gallery[0].alt} />
))