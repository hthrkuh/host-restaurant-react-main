export const CHANGE_TABLE_STATUS = 'CHANGE_TABLE_STATUS';
export const REMOVE_FROM_ORDER_LIST = 'REMOVE_FROM_ORDER_LIST';

export const changeTableStatus = ({id, status, data}) => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_TABLE_STATUS, payload: {id, status, data}});
    }
};
export const removeFromOrderList = (id) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_FROM_ORDER_LIST, payload: id});
    }
};
