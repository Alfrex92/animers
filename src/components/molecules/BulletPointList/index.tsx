import * as React from 'react'
import { StyleBulletPointList } from "./styles"
import BulletPoint from "../../atoms/BulletPoint"

interface BulletPointListInterface {
    bulletPoints: BulletPointInterface[]
}

interface BulletPointInterface {
    id: string;
    content: string;
}

const BulletPointList: React.FC<BulletPointListInterface> = (
    props: BulletPointListInterface
) => {
    return (
        <StyleBulletPointList>
            {props.bulletPoints.map(point => (
                <BulletPoint content={point.content} key={point.id} />
            ))}
        </StyleBulletPointList>
    )
}

export default BulletPointList