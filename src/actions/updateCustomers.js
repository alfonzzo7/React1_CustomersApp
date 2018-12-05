import { UPDATE_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

import { apiPut } from './../api/index';
import { urlCustomers } from "../api/url";

export const updateCustomers = createAction(UPDATE_CUSTOMERS, (id, customer) => apiPut(urlCustomers, id, customer));