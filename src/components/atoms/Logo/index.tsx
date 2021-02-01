import * as React from 'react'
import { StyleLogoContainer, StyleLogo, StyleLinkName } from "./styles"

const Logo = () => {
    return (
        <StyleLogoContainer>
            <StyleLogo to={"/"}><StyleLinkName>animers</StyleLinkName></StyleLogo>
        </StyleLogoContainer>
    )
}

export default Logo