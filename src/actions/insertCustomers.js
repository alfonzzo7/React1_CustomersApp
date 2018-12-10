import { INSERT_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

import { apiPost } from './../api/index';
import { urlCustomers } from "../api/url";

export const insertCustomers = createAction(INSERT_CUSTOMERS, (customer) => apiPost(urlCustomers, customer));