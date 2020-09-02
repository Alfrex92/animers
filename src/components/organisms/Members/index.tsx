import React from "react"
import { StyleMembers } from "./styles"
import MemberInfo, { MemberInfoInterface } from "../../molecules/MemberInfo"

interface Members extends MemberInfoInterface {
  id: string
}

interface MembersInterface {
  membersList: Members[]
}

const Members: React.FC<MembersInterface> = (props: MembersInterface) => {
  return (
    <StyleMembers>
      {props.membersList.map(member => (
        <MemberInfo
          key={member.id}
          name={member.name}
          description={member.description}
          image={member.image}
          role={member.role}
          sns={member.sns}
        />
      ))}
    </StyleMembers>
  )
}

export default Members
