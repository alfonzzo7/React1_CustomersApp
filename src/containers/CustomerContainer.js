import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { Route, withRouter } from 'react-router-dom';

import AppFrame from './../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomers } from './../actions/updateCustomers';

class CustomerContainer extends Component {
    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }    

    handleSubmit = values => {
        // console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.updateCustomers(id, values).then(res => {
            if (res.error) {
                throw new SubmissionError(res.payload);
            }
        });
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({match}) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer} 
                            onSubmit={this.handleSubmit}
                            onSubmitSuccess={this.handleOnSubmitSuccess}
                            onBack={this.handleOnBack} />
            }
        }
        />
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`} 
                    // body={<h2>Datos del cliente: {this.props.customer.name}</h2>}
                    body={this.renderBody()}
                    >
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

const mapDispatchToProps = { fetchCustomers, updateCustomers };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));