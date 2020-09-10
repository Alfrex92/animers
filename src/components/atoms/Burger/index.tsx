import React from 'react'
import { StyleBurger, StyleDiv } from "./styles"

interface BurgerInterface {
    open: boolean;
    setOpen: () => void;
}

const BurgerIcon: React.FC<BurgerInterface> = (props: BurgerInterface) => {
    console.log(props.open)
    return (
        <StyleBurger open={props.open} onClick={props.setOpen}>
            <StyleDiv open={props.open} />
            <StyleDiv open={props.open} />
            <StyleDiv open={props.open} />
        </StyleBurger>
    )
}

export default BurgerIcon