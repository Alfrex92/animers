import * as React from 'react'
import { StyleMenuLinkContainer } from "./styles"
import translationsEn from "../../../../config/translations/en.json"

import MenuLink from "../../atoms/MenuLink/index"

const Links = translationsEn.menu;

const NavMenu: React.FC = () => {
    return (
        <StyleMenuLinkContainer>
            {Links.map(link => (
                <MenuLink linkName={link.title} />
            ))}
        </StyleMenuLinkContainer>
    )
}

export default NavMenu