import React from "react"
import { StyleMembers } from "./styles"
import MemberInfo, { MemberInfoInterface } from "../../molecules/MemberInfo"

interface MembersListInterface extends MemberInfoInterface {
  id: string
}

interface MembersInterface {
  membersList: MembersListInterface[]
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
