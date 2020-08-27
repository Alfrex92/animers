import React from 'react'
import { StyleMobileNavMenuWrapper } from "./styles"
import NavMenu from "../../molecules/NavMenu"
import Footer from "../../organisms/Footer"

interface MobileNavMenuInterface {
    emailMessage: string,
    emailAddress: string,
    socialMessage: string,
    copyrightContent: string,
    open: boolean
}

const MobileNavMenu: React.FC<MobileNavMenuInterface> = (
    props: MobileNavMenuInterface
) => {
    return (
        <StyleMobileNavMenuWrapper open={props.open}>
            <NavMenu />
            <Footer emailMessage={props.emailMessage} emailAddress={props.emailAddress} socialMessage={props.socialMessage} copyrightContent={props.copyrightContent} />
        </StyleMobileNavMenuWrapper>
    )
}

export default MobileNavMenu
