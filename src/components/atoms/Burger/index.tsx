import React, { useState } from 'react'
import { StyleBurger, StyleDiv } from "./styles"

interface BurgerInterface {
    open: boolean;
}

const BurgerIcon: React.FC<BurgerInterface> = (props) => {
    return (
        <StyleBurger open={props.open} onClick={() => setOpen(oldProps => !oldProps)}>
            <StyleDiv open={props.open} />
            <StyleDiv open={props.open} />
            <StyleDiv open={props.open} />
        </StyleBurger>
    )
}

export default BurgerIcon