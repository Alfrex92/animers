import React from 'react'
import { StyleHPCNumberListItemWrapper, StyleHPCNumberListItem } from "./styles"

import HPCNumberLIContent from "../../atoms/HPCNumberLIContent"
import HPCNumberLITitle from "../../atoms/HPCNumberLITitle"
import HPCNumberLINum from "../../atoms/HPCNumberLINum"

interface HPCNumberListItemInterface {
    numContent: string;
    liTitle: string;
    liContent: string;
}

const HPCNumberListItem: React.FC<HPCNumberListItemInterface> = (
    props: HPCNumberListItemInterface
) => {
    return (
        <StyleHPCNumberListItemWrapper>
            <HPCNumberLINum content={props.numContent} />
            <StyleHPCNumberListItem>
                <HPCNumberLITitle title={props.liTitle} />
                <HPCNumberLIContent content={props.liContent} />
            </StyleHPCNumberListItem>
        </StyleHPCNumberListItemWrapper>
    )
}

export default HPCNumberListItem
