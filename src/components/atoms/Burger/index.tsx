import React, { useState } from 'react'
import { StyleBurger, StyleDiv } from "./styles"


const BurgerIcon: React.FC<{ open: boolean, setOpen: Function }> = ({ open, setOpen }) => {
    return (
        <StyleBurger open={open} onClick={() => setOpen(!open)}>
            <StyleDiv open={open} />
            <StyleDiv open={open} />
            <StyleDiv open={open} />
        </StyleBurger>
    )
}

export default BurgerIcon