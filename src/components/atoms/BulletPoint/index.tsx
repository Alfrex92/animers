import * as React from 'react'
import { StyleBulletPoint } from "./styles"

interface BulletPointInterface {
    content: string;
}

const BulletPoint: React.FC<BulletPointInterface> = (
    props: BulletPointInterface
) => {
    return (
        <StyleBulletPoint>{props.content}</StyleBulletPoint>
    )
}

export default BulletPoint