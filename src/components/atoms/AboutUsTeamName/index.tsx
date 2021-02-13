import React from 'react'
import {StyleTeamMemberNameWrapper, StyleTeamMemberName} from "./styles"

interface TeamNameInterface {
    memberName: string;
}

const AboutUsTeamMemberName: React.FC<TeamNameInterface> = (
    props: TeamNameInterface
) => {
    return (
        <StyleTeamMemberNameWrapper>
            <StyleTeamMemberName>{props.memberName}</StyleTeamMemberName>
        </StyleTeamMemberNameWrapper>
    )
}

export default AboutUsTeamMemberName