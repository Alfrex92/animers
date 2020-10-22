import React from 'react'
import { StyleMobileNavMenuWrapper } from "./styles"
import NavMenuMobile from "../../molecules/NavMenuMobile"
import Footer from "../../organisms/Footer"

interface MobileNavMenuInterface {
    emailMessage: string,
    emailAddress: string,
    socialMessage: string,
    copyrightContent: string,
    open: boolean,
    navMenuProps: NavMenuInterface
}

interface NavMenuInterface {
    mobileNavLinks: LinkInterface[]
}

interface LinkInterface {
    title: string;
    id: string;
}

const MobileNavMenu: React.FC<MobileNavMenuInterface> = (
    props: MobileNavMenuInterface
) => {
    return (
        <StyleMobileNavMenuWrapper open={props.open}>
            <NavMenuMobile menuLinks={props.navMenuProps.mobileNavLinks}/>
            <Footer emailMessage={props.emailMessage} emailAddress={props.emailAddress} socialMessage={props.socialMessage} copyrightContent={props.copyrightContent} />
        </StyleMobileNavMenuWrapper>
    )
}

export default MobileNavMenu
