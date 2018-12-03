import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

const url = 'http://localhost:3001/customers';

const apiFetchCustomers = () => fetch(url)
                                    .then(data => data.json())
                                    .catch(error => alert(error));

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => apiFetchCustomers());