import React from 'react'

function Order() {
    return (
        <div className="Order-section">
            <table style={{width: '100%',textAlign: 'center',marginTop: '20px'}}>
                  <thead>
                  <tr>
                  <th>S No</th>
                  <th>Items</th>
                  <th>Quantity</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>name 1</td>
                    <td>2</td>
                  </tr> 
                  <tr>
                    <td>1</td>
                    <td>name 1</td>
                    <td>2</td>
                  </tr> 
                  <tr>
                    <td>1</td>
                    <td>name 1</td>
                    <td>2</td>
                  </tr>
                  </tbody> 
            </table>
        </div>
    )
}

export default Order
