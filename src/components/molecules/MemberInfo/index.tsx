import React from "react"
import { StyleMemberInfo } from "./styles"
interface MemberInfoInterface {}

const MemberInfo: React.FC<MemberInfoInterface> = (
  props: MemberInfoInterface
) => {
  return <StyleMemberInfo>Hello</StyleMemberInfo>
}

export default MemberInfo
