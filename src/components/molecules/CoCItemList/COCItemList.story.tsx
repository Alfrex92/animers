import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import data from "../../../../config/translations/en.json"
import CoCItemList from "./index"

const itemLists = data.codeOfConduct.sections[0].subsections.filter(
  subSection => subSection.type === "ul"
)
const sample = itemLists[0].listItems
console.log(sample)

const story = storiesOf("Molecules | COCItemList", module).addDecorator(
  withInfo
)
// Unordered list of items used at different points in Code of Conduct page
story.add("Events", () => <CoCItemList itemList={sample} />)
