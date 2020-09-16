import React from 'react'
import HPCBlockTitle from "../../atoms/HPCBlockTitle"
import BasicButton from "../../molecules/BasicButton"
import BulletPointList from "../../molecules/BulletPointList"

import { StyleSellingPointPanelWrapper, StyleSellingPointContentWrapper } from "./styles"

interface SellingPointPanelInterface {
    blockTitle: string;
    buttonColor: string;
    children: any;
}

const SalesPointPanel: React.FC<SellingPointPanelInterface> =
    (props: SellingPointPanelInterface) => {
        return (
            <StyleSellingPointPanelWrapper>
                <HPCBlockTitle title={props.blockTitle} />
                <StyleSellingPointContentWrapper>
                    <BulletPointList />
                </StyleSellingPointContentWrapper>
                <BasicButton buttonColor={props.buttonColor} children={props.children} />
            </StyleSellingPointPanelWrapper>
        )
    }

export default SalesPointPanel