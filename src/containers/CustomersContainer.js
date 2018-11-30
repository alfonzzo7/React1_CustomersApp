import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { Link, withRouter } from 'react-router-dom';
import CustomerList from './../components/CustomerList';
import CustomerActions from '../components/CustomerActions';

const customers = [
    {
        'dni': '27000000',
        'name': 'Juan Perez',
        'age': 35
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

class CustomersContainer extends Component {
    renderBody = (customers) => (
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customers'}>
            </CustomerList>
            <CustomerActions>
                <button onClick={this.addNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);