import React from 'react'
import { Row } from 'react-bootstrap'
import './itemAxes.css'

const ItemAxes2 = ({ infoItems }) => {
    const { title, text1, text2 } = infoItems

    return (
        <Row xs={12} className='mb-2 justify-content-evenly text-description'>
            <p>
                <span className=' mb-2  violet-3'>
                    {title}
                </span>
                <span className='item-text'>{text1}</span>
            </p>
        </Row>
    )
}

export default ItemAxes2