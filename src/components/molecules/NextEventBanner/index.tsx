import React from 'react'
import {StyleBannerWrapper, StyleBannerNotification, StyleBannerDate} from "./styles"
import BasicButton from '../BasicButton'

interface NextEventBannerInterface {
    textContent: string;
    dateContent: string;
    buttonProps: BasicButtonInterface;
}

interface BasicButtonInterface {
    children: any;
    buttonColor: string;
    hasBorder: boolean;
    textColor: string;
}

const NextEventBanner: React.FC<NextEventBannerInterface> = (
    props: NextEventBannerInterface
) => {
    return (
        <StyleBannerWrapper>
            <StyleBannerNotification>{props.textContent}</StyleBannerNotification>
            <StyleBannerDate>{props.dateContent}</StyleBannerDate>
            <BasicButton buttonColor={props.buttonProps.buttonColor} textColor={props.buttonProps.textColor} hasBorder={props.buttonProps.hasBorder} children={props.buttonProps.children}/>
        </StyleBannerWrapper>
    )
}

export default NextEventBanner