import React from 'react'
import Items from  './Items/Items'
import Order from './Order/Order'
import { connect } from 'react-redux';
class RightPanel extends React.Component {
    render() {
    return (
        <div className="RightPanel">
           <Order orderItems={this.props.orderItems} qplus={(id) => this.props.onQuantityAdd(id)} 
           qminus={(id) =>this.props.onQuantityMinus(id)} />
           <Items itemClicked={(item) => this.props.onItemClick(item)} netAmount={this.props.netAmount}/>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        orderItems : state.order.order,
        netAmount : state.order.netAmount
    }
};

const mapDispatchToProps = (dispach) => {
    return {
        onItemClick : (item) => dispach({type: 'ITEM_CLICK' , payload : item}),
        onQuantityAdd : (itemid) => dispach({type: 'QUA_ADD', payload: itemid }),
        onQuantityMinus : (itemid) => dispach({type: 'QUA_MINUS', payload: itemid })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);
