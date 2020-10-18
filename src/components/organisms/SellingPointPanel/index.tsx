import React from "react"
import HPCBlockTitle from "../../atoms/HPCBlockTitle"
import BasicButton from "../../molecules/BasicButton"
import BulletPointList from "../../molecules/BulletPointList"

import {
  StyleSellingPointPanelWrapper,
  StyleSellingPointContentWrapper,
} from "./styles"

interface SellingPointPanelInterface {
  blockTitle: string
  buttonColor: string
  textColor: string
  hasBorder: boolean
  children: any
  bulletPoints: BulletPointInterface[]
}

interface BulletPointInterface {
  id: string;
  content: string;
}

const SalesPointPanel: React.FC<SellingPointPanelInterface> = (
  props: SellingPointPanelInterface
) => {
  return (
    <StyleSellingPointPanelWrapper>
      <HPCBlockTitle title={props.blockTitle} />
      <StyleSellingPointContentWrapper>
        <BulletPointList bulletPoints={props.bulletPoints}/>
      </StyleSellingPointContentWrapper>
      <BasicButton
        buttonColor={props.buttonColor}
        textColor={props.textColor}
        hasBorder={props.hasBorder}
        children={props.children}
      />
    </StyleSellingPointPanelWrapper>
  )
}

export default SalesPointPanel
