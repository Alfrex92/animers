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
  buttonProps: BasicButtonInterface
  bulletPoints: BulletPointInterface[]
}

interface BulletPointInterface {
  id: string;
  content: string;
}

interface BasicButtonInterface {
  children: any;
  buttonColor: string;
  hasBorder: boolean;
  textColor: string;
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
        buttonColor={props.buttonProps.buttonColor}
        textColor={props.buttonProps.textColor}
        hasBorder={props.buttonProps.hasBorder}
        children={props.buttonProps.children}
      />
    </StyleSellingPointPanelWrapper>
  )
}

export default SalesPointPanel
