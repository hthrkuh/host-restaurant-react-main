export const ADD_TO_CART = 'ADD_TO_CART'; 
export const END_ORDER_CART = 'END_ORDER_CART'; 

export const addToCard = (obj) => {
    return async (dispatch) => {
        dispatch({ type: ADD_TO_CART, payload: obj});
    }
};

export const endOrderCard = (id) => {
    return async (dispatch) => {
        dispatch({ type: END_ORDER_CART, payload: id});
    }
};
