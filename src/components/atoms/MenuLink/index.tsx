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
            <StyleLinkName>
                <Link to={`./${props.linkName}`}>{props.linkName}</Link>
            </StyleLinkName>
        </StyleNavMenuLink>
    )
}

export default MenuLink