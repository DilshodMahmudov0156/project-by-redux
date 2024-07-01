const initialState = [
    {
        id: '0',
        name: 'Dilshod',
        email: 'd@g.com',
        number: '12345',
    },
    {
        id: '1',
        name: 'Sunnatilla',
        email: 's@g.com',
        number: '54321',
    },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'UPDATE_CONTACT':
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case 'DELETE_CONTACT':
            const filteredContacts = state.filter(contact => contact.id !== action.payload);
            state = filteredContacts;
            return state;
        default:
            return state;
    }
};

export default contactReducer;