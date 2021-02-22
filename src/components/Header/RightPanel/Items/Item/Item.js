import React from 'react'

function Item(props) {
    return (
        <div className='item'>
            <p>{props.item.id}</p>
            <p>{props.item.desc1}</p>
        </div>
    )
}

export default Item
