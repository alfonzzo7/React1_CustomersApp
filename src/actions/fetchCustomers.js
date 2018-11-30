import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

const customers = [
    {
        'dni': '27000000',
        'name': 'Juan Perez',
        'age': 28
    },
    {
        'dni': '30000000',
        'name': 'Luis Gonzalez',
        'age': 32
    },
    {
        'dni': '18000000',
        'name': 'Maria Rubio',
        'age': 30
    },
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);