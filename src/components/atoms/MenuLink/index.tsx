import * as React from 'react'
import { Link } from "gatsby"
import { StyleNavMenuLink, StyleLink, StyleLinkName } from "./styles"


interface MenuLinkInterface {
    linkName: string
}

const MenuLink: React.FC<MenuLinkInterface> = (
    props: MenuLinkInterface
) => {
    return (
        <StyleNavMenuLink>
            <StyleLink to={`./${props.linkName}`}><StyleLinkName>{props.linkName}</StyleLinkName></StyleLink>
        </StyleNavMenuLink>
    )
}

export default MenuLink