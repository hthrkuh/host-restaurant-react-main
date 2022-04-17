import { REMOVE_FROM_ORDER_LIST } from '../../actions/table';

const defaultState = [
    {
      Mobile: "053-111-2222",
      Diners: 1
    },
    {
      Mobile: "053-222-3333",
      Diners: 1
    },
    {
      Mobile: "053-333-4444",
      Diners: 2
    },
    {
      Mobile: "053-444-5555",
      Diners: 2
    },
    {
      Mobile: "053-555-6666",
      Diners: 2
    },
    {
      Mobile: "053-666-7777",
      Diners: 3
    },
    {
      Mobile: "053-777-8888",
      Diners: 3
    },
    {
      Mobile: "053-888-9999",
      Diners: 4
    },
    {
      Mobile: "053-999-0000",
      Diners: 4
    },
    {
      Mobile: "054-111-2222",
      Diners: 5
    },
    {
      Mobile: "054-222-3333",
      Diners: 6
    },
    {
      Mobile: "054-333-4444",
      Diners: 1
    },
    {
      Mobile: "054-444-5555",
      Diners: 2
    },
    {
      Mobile: "053-555-6669",
      Diners: 3
    },
    // **********
    {
      Mobile: "053-555-6610",
      Diners: 8
    },
    {
      Mobile: "053-555-6611",
      Diners: 7
    },
    {
      Mobile: "053-555-6612",
      Diners: 4
    },
  ];

const orders = (state = defaultState, action) => {
    switch (action.type) {
      case REMOVE_FROM_ORDER_LIST:
            const newState = state.filter(item => {
              return item.Mobile !== action.payload;
            })
            return newState;
        default:
            return state;

    }
}

export default orders;