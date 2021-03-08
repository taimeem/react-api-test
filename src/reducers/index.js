import { combineReducers } from 'redux';
import orderReducer from './orderReducer/orderReducer';

const rootReducer = combineReducers({
    order : orderReducer
});


export default rootReducer;