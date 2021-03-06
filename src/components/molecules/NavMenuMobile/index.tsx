import * as React from 'react'
import { StyleMenuLinkContainer } from "./styles"

import MenuLink from "../../atoms/MenuLink/index"

interface NavMenuInterface {
    menuLinks: LinkInterface[]
}

interface LinkInterface {
    title: string;
    id: string;
    slug: string;
}

const NavMenuMobile: React.FC<NavMenuInterface> = (
    props: NavMenuInterface
) => {
    return (
        <StyleMenuLinkContainer>
            {props.menuLinks.map((navLink) => (
                <MenuLink linkName={navLink.title} key={navLink.id} slug={navLink.slug}/>
            ))}
        </StyleMenuLinkContainer>
    )
}

export default NavMenuMobile