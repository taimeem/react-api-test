import React from 'react'
import Items from  './Items/Items'
import Order from './Order/Order'
function RightPanel() {
    return (
        <div className="RightPanel">
           <Order/>
           <Items/>
        </div>
    )
}

export default RightPanel
