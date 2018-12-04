import { createSelector } from 'reselect';

export const getCustomers = state => state.customers;

export const getCustomerByDni = createSelector(
    (state, props) => state.customers.find(customer => customer.dni === props.dni),
    customer => customer
);