import React from 'react';
import PropTypes from 'prop-types';

import CustomerActions from './CustomerActions';
import { CUSTOMER_VIEW } from './../constants/permissions';
import { accessControl } from '../helpers/accessControl';

const CustomerData = ({id, name, dni, age, onBack, isDeleteAllow, onDelete}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong> <i>{name}</i></div>
                <div><strong>DNI</strong> <i>{dni}</i></div>
                <div><strong>Edad</strong> <i>{age}</i></div>
            </div>
            <CustomerActions>
                <button type="button" onClick={onBack}>Volver</button>
                {isDeleteAllow && <button type="button" onClick={() => onDelete(id)}>Eliminar</button>}
            </CustomerActions>
        </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default accessControl([CUSTOMER_VIEW])(CustomerData);