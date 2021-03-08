import React from 'react'

function Item(props) {
    return (
        <div className='item' onClick={() => props.clicked(props.item)}>
            <p>{props.item.id}</p>
            <p>{props.item.desc1}</p>
        </div>
    )
}

export default Item
