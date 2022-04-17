import { CHANGE_TABLE_STATUS } from '../../actions/table';

const defaultState = [
    {
        Table: 101,
        Diners: 1,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            102,
            103
        ]
    },
    {
        Table: 102,
        Diners: 1,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            101,
            103
        ]
    },
    {
        Table: 103,
        Diners: 1,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            101,
            102
        ]
    },
    {
        Table: 201,
        Diners: 2,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            202
        ]
    },
    {
        Table: 202,
        Diners: 2,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            201
        ]
    },
    {
        Table: 203,
        Diners: 2,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            601
        ]
    },
    {
        Table: 301,
        Diners: 3,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: []
    },
    {
        Table: 302,
        Diners: 3,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            501
        ]
    },
    {
        Table: 401,
        Diners: 4,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            402
        ]
    },
    {
        Table: 402,
        Diners: 4,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            401
        ]
    },
    {
        Table: 501,
        Diners: 5,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            302
        ]
    },
    {
        Table: 601,
        Diners: 6,
        Status: 'empty',
        Mobile: false,
        someDiners: false,
        startTimetamp: false,
        Concat: [
            203
        ]
    }
];

const tables = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TABLE_STATUS:
            const newState = [...state];
            if (typeof action.payload.id === 'object') {
                newState.map((item, index) => {
                    if (item.Table === action.payload.id.a) {
                        newState[index].Status = action.payload.status;
                        newState[index].Mobile = action.payload.data.Mobile;
                        newState[index].startTimetamp = action.payload.data.startTimetamp;
                        newState[index].someDiners = action.payload.data.someDiners;
                    }
                });
                newState.map((item, index) => {
                    if (item.Table === action.payload.id.b) {
                        newState[index].Status = action.payload.status;
                        newState[index].Mobile = action.payload.data.Mobile;
                        newState[index].startTimetamp = action.payload.data.startTimetamp;
                        newState[index].someDiners = action.payload.data.someDiners;
                    }
                });
            }
            if (typeof action.payload.id === 'number') {
                newState.map((item, index) => {
                    if (item.Table === action.payload.id) {
                        newState[index].Status = action.payload.status;
                        newState[index].Mobile = action.payload.data.Mobile;
                        newState[index].startTimetamp = action.payload.data.startTimetamp;
                        newState[index].someDiners = action.payload.data.someDiners;
                    }
                });
            }
            return newState;
        default:
            return state;
    }
};

export default tables;