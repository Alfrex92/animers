import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import ImageGallery from "./index"


const story = storiesOf("Molecules | ImageGallery", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
//Gallery of multiple images
story.add("Component", () => (
    <ImageGallery images={data.gallery}/>
))