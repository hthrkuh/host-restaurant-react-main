import { combineReducers } from 'redux';
import tables from './restaurant/tables';
import orders from './restaurant/orders';
import completedOrders from './restaurant/completedOrders';

export default combineReducers({
    tablesList: tables,
    ordersList: orders,
    completedOrdersList: completedOrders,
});