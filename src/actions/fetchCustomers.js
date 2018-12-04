import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

import { apiFetch } from './../api/index';
import { urlCustomers } from "../api/url";

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => apiFetch(urlCustomers));