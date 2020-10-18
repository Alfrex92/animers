import * as React from 'react'
import data from "../../../../config/translations/en.json"
import { StyleBulletPointList } from "./styles"
import BulletPoint from "../../atoms/BulletPoint"

const listPoints = data.sellingPoints;

const BulletPointList: React.FC = () => {
    return (
        <StyleBulletPointList>
            {listPoints.map(point => (
                <BulletPoint content={point.content} key={point.id} />
            ))}
        </StyleBulletPointList>
    )
}

export default BulletPointList