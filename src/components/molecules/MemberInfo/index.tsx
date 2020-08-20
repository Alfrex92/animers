import React from "react"
import {
  StyleMemberInfo,
  StyleRole,
  StyleName,
  StyleIconContainer,
  StyleDescription,
  StyleImg,
} from "./styles"
interface MemberInfoInterface {
  image: string
  icon: "INSTAGRAM" | "TWITTER"
  description: string
  role: string
  snsLink: string
  name: string
}

const MemberInfo: React.FC<MemberInfoInterface> = (
  props: MemberInfoInterface
) => {
  return (
    <StyleMemberInfo>
      <StyleImg width={128} height={128} applyAspectRatio src={props.image} />
      <StyleName>{props.name}</StyleName>
      <StyleRole>{props.role}</StyleRole>
      <StyleIconContainer>
        {props.icon === "INSTAGRAM" ? <p>i</p> : <p>t</p>}
      </StyleIconContainer>
      <StyleDescription>{props.description}</StyleDescription>
    </StyleMemberInfo>
  )
}

export default MemberInfo
