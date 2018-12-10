import { handleActions } from 'redux-actions';

import { FETCH_CUSTOMERS, UPDATE_CUSTOMERS, INSERT_CUSTOMERS, DELETE_CUSTOMERS } from '../constants';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload ],
    [UPDATE_CUSTOMERS]: (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload;
        const customers = state;
        const newCustomers = customers.reduce((acc, customer) => {
            if (customer.id === id) {
                return [...acc, customerPayload];
            } else {
                return [...acc, customer];
            }
        }, []);
        return newCustomers;
    },
    [INSERT_CUSTOMERS]: (state, action) => [ ...state, action.payload ],
    [DELETE_CUSTOMERS]: (state, action) => state.filter(customer => customer.id !== action.payload),
}, []);