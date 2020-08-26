import React from 'react'
import { StyleMobileNavMenuWrapper } from "./styles"

import CloseIcon from "../../atoms/CloseIcon"
import NavMenu from "../../molecules/NavMenu"
import Footer from "../../organisms/Footer"

interface MobileNavMenuInterface {
    emailMessage: string,
    emailAddress: string,
    socialMessage: string,
    copyrightContent: string
}

const MobileNavMenu: React.FC<MobileNavMenuInterface> = (
    props: MobileNavMenuInterface
) => {
    return (
        <StyleMobileNavMenuWrapper>
            <div style={{ height: "10vh", maxWidth: "500px", width: "100vw" }}>
                <CloseIcon />
            </div>
            <NavMenu />
            <Footer emailMessage={props.emailMessage} emailAddress={props.emailAddress} socialMessage={props.socialMessage} copyrightContent={props.copyrightContent} />
        </StyleMobileNavMenuWrapper>
    )
}

export default MobileNavMenu
