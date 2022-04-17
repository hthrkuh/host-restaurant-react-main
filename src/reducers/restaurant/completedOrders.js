import { ADD_TO_CART, END_ORDER_CART } from '../../actions/completedOrders';

const defaultState = [
  // {
  //   Mobile: 'string identifier like (053-xxx-xxxx)',
  //   Diners: 'number of diners that got service',
  //   tables: 'list of int (table that the customer got service at)',
  //   start_time: 'timestamp when order start',
  //   end_time: 'timestamp when order completed',
  //   status: '',
  // }
];

const completedOrders = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    case END_ORDER_CART:
      const newStateA = [...state];
      state.map((item, index) => {
        if (item.tables.includes(action.payload)) {
          newStateA[index].status = 'end';
          newStateA[index].end_time = new Date();
        }
      });
      return newStateA;
    default:
      return state;

  }
}

export default completedOrders;