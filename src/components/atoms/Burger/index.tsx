import React, { useState, ReactComponentElement } from 'react'
import { StyleBurger, StyleDiv } from "./styles"

const BurgerIcon: React.FC<{ open: boolean, setOpen: Function }> = (props) => {
    return (
        <StyleBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
            <StyleDiv open={props.open} />
            <StyleDiv open={props.open} />
            <StyleDiv open={props.open} />
        </StyleBurger>
    )
}

export default BurgerIcon