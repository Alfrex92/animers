import * as React from 'react'
import { StyleNavMenuLink, StyleLink, StyleLinkName } from "./styles"


interface MenuLinkInterface {
    linkName: string;
    slug: string;
}

const MenuLink: React.FC<MenuLinkInterface> = (
    props: MenuLinkInterface
) => {
    return (
        <StyleNavMenuLink>
            <StyleLink to={`/${props.slug}`}><StyleLinkName>{props.linkName}</StyleLinkName></StyleLink>
        </StyleNavMenuLink>
    )
}

export default MenuLink