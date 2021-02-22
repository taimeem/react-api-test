import React, {useEffect, useState} from 'react'
import Item from './Item/Item'
import axios from 'axios'

function Items() {
    const [items, setItems] = useState([]);
     useEffect(() => {
        const itemdata = axios.get('https://tathkra.com/learnapi/api/MenusMaster')
                         .then((response)=> {
                             debugger;
                            setItems(response.data)
                         }).catch(error => {
                             console.log(error)
                         });
        
     }, [])

    const itemsJsxElements = items.map((item,index) => {
        debugger;
        return <Item item={item} key={item.id}/>;
    })
    return (
        <div>
            <h1 style={{padding:'15px'}}>items</h1>
            <div className='item-container'>
            {itemsJsxElements}
            </div>
        </div>
    )
}

export default Items
