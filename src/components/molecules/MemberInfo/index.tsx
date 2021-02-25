import React from "react"
import {
  StyleMemberInfo,
  StyleRole,
  StyleName,
  StyleIconContainer,
  StyleDescription,
  StyleImg,
} from "./styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export interface MemberInfoInterface {
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

function getSNSIcon(service: string) {
  switch (service) {
      case "facebook":
          return faFacebookF
      case "instagram":
          return faInstagram
      case "twitter":
          return faTwitter
  }
}

const MemberInfo: React.FC<MemberInfoInterface> = (
  props: MemberInfoInterface
) => {
  return (
    <StyleMemberInfo>
      <StyleImg width={128} height={128}  src={props.image} />
      <StyleName>{props.name}</StyleName>
      <StyleRole>{props.role}</StyleRole>
      <StyleIconContainer>
        {props.sns.map((service) => (
          <a href={`${service.url}`} target="_blank" rel="noopener noreferrer" key={`${props.name}+${Math.random()*100}`}><FontAwesomeIcon icon={getSNSIcon(service.service)!} /></a>
        ))}
      </StyleIconContainer>
      <StyleDescription>{props.description}</StyleDescription>
    </StyleMemberInfo>
  )
}

export default MemberInfo
