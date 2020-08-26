import * as React from 'react'
import { StyleMenuLinkContainer } from "./styles"
import data from "../../../../config/translations/en.json"

import MenuLink from "../../atoms/MenuLink/index"

const links = data.menu;

const NavMenu: React.FC = () => {
    return (
        <StyleMenuLinkContainer>
            {links.map(link => (
                <MenuLink linkName={link.title} />
            ))}
        </StyleMenuLinkContainer>
    )
}

export default NavMenu