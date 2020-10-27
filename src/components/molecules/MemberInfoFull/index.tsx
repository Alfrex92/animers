import React from 'react'
import {StyleMemberInfoBlock, StyleMembersWrapper} from "./styles"
import AboutSectionTitle from "../../atoms/AboutSectionTitle"
import MemberInfo from "../MemberInfo"


interface MemberInfoFullInterface {
    sectionTitle: string;
    memberInfoArray: MemberInfoInterface[];
}

interface MemberInfoInterface {
    id: string;
    name: string;
    role: string;
    image: string;
    sns: {
      service: string;
      url: string;
    }[]
    description: string;
}

const MemberInfoFull: React.FC<MemberInfoFullInterface> = (
    props: MemberInfoFullInterface
) => {
    return (
        <StyleMemberInfoBlock>
                <AboutSectionTitle content={props.sectionTitle}/>
            <StyleMembersWrapper>
                {props.memberInfoArray.map((member) => (
                    <MemberInfo id={member.id} key={member.id} name={member.name} role={member.role} image={member.image} description={member.description} sns={member.sns}/>
                ))}
            </StyleMembersWrapper>
        </StyleMemberInfoBlock>
    )
}

export default MemberInfoFull