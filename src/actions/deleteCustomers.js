import { DELETE_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

import { apiDelete } from './../api/index';
import { urlCustomers } from "../api/url";

export const deleteCustomers = createAction(DELETE_CUSTOMERS, (id) => apiDelete(urlCustomers, id));