import * as React from 'react'
import { StyleLogoContainer, StyleLogo } from "./styles"

interface LogoLinkInterface {
    logoUrl: string,
}

const Logo: React.FC<LogoLinkInterface> = (
    props: LogoLinkInterface
) => {
    return (
        <StyleLogoContainer>
            <StyleLogo href={props.logoUrl}>animers</StyleLogo>
        </StyleLogoContainer>
    )
}

export default Logo