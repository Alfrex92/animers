import React from 'react'
import HPCBlockTitle from "../../atoms/HPCBlockTitle"
import BasicButton from "../../molecules/BasicButton"
import PanelMessage from "../../atoms/HPCPanelMessage"

import { MessagePanelWrapper } from "./styles"

interface MessagePanelInterface {
    blockTitle: string;
    content: string;
    buttonColor: string;
    children: any;
}

const MessagePanel: React.FC<MessagePanelInterface> =
    (props: MessagePanelInterface) => {
        return (
            <MessagePanelWrapper>
                <HPCBlockTitle title={props.blockTitle} />
                <PanelMessage content={props.content} />
                <BasicButton buttonColor={props.buttonColor} children={props.children} />
            </MessagePanelWrapper>
        )
    }

export default MessagePanel