import React, {useEffect, useState} from 'react'
import Item from './Item/Item'
import axios from 'axios'

function Items(props) {
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
        return <Item item={item} key={item.id} clicked={() => props.itemClicked(item)}/>;
    })
    return (
        <div>
            <h4 style={{padding:'10px 15px'}}>items
            <div className="d-inline-block" style={{ width: '85%',
    textAlign: 'right'}}>Net Amount: {props.netAmount} KWD</div>
            </h4>
            <div className='item-container'>
            {itemsJsxElements}
            </div>
        </div>
    )
}

export default Items
