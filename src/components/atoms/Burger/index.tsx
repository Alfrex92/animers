import React from 'react'
import { StyleBurger, StyleIconBar } from "./styles"

interface BurgerInterface {
    open: boolean;
    setOpen: () => void;
}

const BurgerIcon: React.FC<BurgerInterface> = (props: BurgerInterface) => {
    return (
        <StyleBurger open={props.open} onClick={props.setOpen}>
            <StyleIconBar open={props.open} />
            <StyleIconBar open={props.open} />
            <StyleIconBar open={props.open} />
        </StyleBurger>
    )
}

export default BurgerIcon