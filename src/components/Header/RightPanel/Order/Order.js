import React from 'react'
import { Table } from 'reactstrap';

function Order(props) {
  const orderItems = props.orderItems.map(item => {
    return (
      <tr>
      <td>{item.id}</td>
      <td>{item.desc1}</td>
      <td>{item.price}</td>
      <td>
      <div class="input-group">
        <input type="button" value="-" class="button-minus" data-field="quantity"  onClick={() => props.qminus(item.id)}/>
        <input type="number" step="1" max="" value={item.quantity} name="quantity" class="quantity-field"/>
        <input type="button" value="+" class="button-plus" data-field="quantity" onClick={() => props.qplus(item.id)}/>
      </div>
      </td>
      <td className="text-left">{item.tprice}</td>
      <td><a href="#">Remove</a></td>
      </tr>
    )
  });
    return (
        <div className="Order-section">
          <h1>{props.netAmount}</h1>
          <div className="tableFixHead">
           <Table className="table table-fixed">
      <thead>
        <tr>
          <th style={{width:'12%'}}>Item Code</th>
          <th>Item</th>
          <th>Base Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody style={{height:'150px', overflowY: 'scroll'}}>
         
          { 
            props.orderItems.length === 0 ? <tr><td colSpan='5'><div style={{width:'100%', height: '180px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>No items found</div></td></tr>: orderItems
          }
         
       
      </tbody>
    </Table>
    </div>
        </div>
    )
}

export default Order
