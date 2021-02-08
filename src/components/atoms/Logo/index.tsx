import * as React from 'react'
import { StyleLogoContainer, StyleLogo, StyleLinkName } from "./styles"

export interface LogoInterface {
    children: React.ReactNode;
}

const Logo: React.FC<LogoInterface> = (
    props: LogoInterface
    ) => {
    return (
        <StyleLogoContainer>
            <StyleLogo to={"/"}><StyleLinkName>{props.children}</StyleLinkName></StyleLogo>
        </StyleLogoContainer>
    )
}

export default Logo