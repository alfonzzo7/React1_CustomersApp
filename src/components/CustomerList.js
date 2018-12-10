import React from 'react';
import PropTypes from 'prop-types';

import CustomerListItem from './CustomerListItem';
import { accessControl } from './../helpers/accessControl';
import { CUSTOMER_LIST } from './../constants/permissions';

const CustomerList = ({customers, urlPath}) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map(customer => 
                        <CustomerListItem
                            key={customer.dni}
                            name={customer.name}
                            dni={customer.dni}
                            editAction={'Editar'}
                            delAction={'Borrar'}
                            urlPath={urlPath}>
                        </CustomerListItem>
                        )
                }
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomerList);