import React from "react"
import { StyleItemListWrapper, StyleItemList, StyleItem } from "./styles"

interface CoCItemListInterface {
  itemList: COCItemInterface[] | null
}

interface COCItemInterface {
  content: string
  listItemID: string
}

const CoCItemList: React.FC<CoCItemListInterface> = (
  props: CoCItemListInterface
) => {
  return (
    <StyleItemListWrapper>
      <StyleItemList>
        {props.itemList.map(item => (
          <StyleItem key={item.listItemID}> {item.content}</StyleItem>
        ))}
      </StyleItemList>
    </StyleItemListWrapper>
  )
}

export default CoCItemList
