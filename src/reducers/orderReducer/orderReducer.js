const initialState = {
    order:  [],
    netAmount: 0
}
const reducer = function(state = initialState, action) {
    debugger;
    switch(action.type) {
        case 'ITEM_CLICK':
        //alert(action.payload)
        const itemObj = action.payload;
        itemObj.price = Number(itemObj.price).toFixed(2);
        itemObj.tprice = Number(itemObj.price);
        itemObj.quantity = 1;

        let find_status = !!state.order.find(item => item.id === itemObj.id)
        if (find_status) {
            alert('Item already added to cart')
            return state;
        } else {
            debugger;
            const updateState = {...state};
            updateState.order = updateState.order.concat(itemObj)
            updateState.netAmount = updateState.order.reduce((acc, curr) => {
                debugger;
                return acc + curr.tprice
            }, 0);
            console.log(updateState)
            return {
                ...state,
                order: updateState.order,
                netAmount: updateState.netAmount
            };
        }
           
      
        case 'QUA_ADD':
            const updateState = {...state};
            const updatedOrder = updateState.order;
            updatedOrder.map(item => {
                if(item.id === action.payload) {
                    item.quantity = item.quantity + 1;
                    item.tprice = parseFloat(item.quantity * item.price);
                }
            })
            updateState.netAmount = updatedOrder.reduce((acc, curr) => {
                debugger;
                return acc + curr.tprice
            }, 0);
            
            return {
                ...state,
               order: updatedOrder,
               netAmount: updateState.netAmount
            }
        case 'QUA_MINUS':
            const updateState1 = {...state};
            const updatedOrder1 = updateState1.order;
            updatedOrder1.map(item => {
                if(item.id === action.payload) {
                    item.quantity = item.quantity - 1;
                    item.tprice = parseFloat(item.quantity * item.price);
                }
            })
            updateState1.netAmount = updatedOrder1.reduce((acc, curr) => {
                debugger;
                return acc + curr.tprice
            }, 0);
            
            return {
                ...state,
               order: updatedOrder1,
               netAmount: updateState1.netAmount
            }
           default: 
            return state
    }
}

export default reducer;