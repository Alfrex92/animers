import * as React from 'react'
import { Link } from "gatsby"
import { StyleNavMenuLink, StyleLinkName } from "./styles"


interface MenuLinkInterface {
    linkName: string
}

const MenuLink: React.FC<MenuLinkInterface> = (
    props: MenuLinkInterface
) => {
    return (
        <StyleNavMenuLink>
            <Link to={`./${props.linkName}`} style={{ textDecoration: "none" }}><StyleLinkName>{props.linkName}</StyleLinkName></Link>
        </StyleNavMenuLink>
    )
}

export default MenuLink