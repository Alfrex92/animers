import React from "react"
import HPCBlockTitle from "../../atoms/HPCBlockTitle"
import BasicButton from "../../molecules/BasicButton"
import PanelMessage from "../../atoms/HPCPanelMessage"

import { MessagePanelWrapper } from "./styles"

interface MessagePanelInterface {
  blockTitle: string
  content: string
  buttonProps: BasicButtonInterface;
}

interface BasicButtonInterface {
  children: any;
  buttonColor: string;
  hasBorder: boolean;
  textColor: string;
}

const MessagePanel: React.FC<MessagePanelInterface> = (
  props: MessagePanelInterface
) => {
  return (
    <MessagePanelWrapper>
      <HPCBlockTitle title={props.blockTitle} />
      <PanelMessage content={props.content} />
      <BasicButton
        buttonColor={props.buttonProps.buttonColor}
        textColor={props.buttonProps.textColor}
        children={props.buttonProps.children}
        hasBorder={props.buttonProps.hasBorder}
      />
    </MessagePanelWrapper>
  )
}

export default MessagePanel
