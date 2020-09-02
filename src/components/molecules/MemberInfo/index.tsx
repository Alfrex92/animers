import React from "react"
import {
  StyleMemberInfo,
  StyleRole,
  StyleName,
  StyleIconContainer,
  StyleDescription,
  StyleImg,
} from "./styles"

export interface MemberInfoInterface {
  name: string
  role: string
  image: string
  sns: {
    facebook?: string
    twitter?: string
    instagram?: string
  }[]
  description: string
}

const MemberInfo: React.FC<MemberInfoInterface> = (
  props: MemberInfoInterface
) => {
  // add the icons
  return (
    <StyleMemberInfo>
      <StyleImg width={128} height={128} applyAspectRatio src={props.image} />
      <StyleName>{props.name}</StyleName>
      <StyleRole>{props.role}</StyleRole>
      <StyleIconContainer></StyleIconContainer>
      <StyleDescription>{props.description}</StyleDescription>
    </StyleMemberInfo>
  )
}

export default MemberInfo
