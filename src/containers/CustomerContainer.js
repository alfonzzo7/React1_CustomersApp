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
import { deleteCustomers } from './../actions/deleteCustomers';

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

    handleOnDelete = (id) => {
        this.props.deleteCustomers(id).then(res => this.props.history.goBack());
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderCustomerControl = (isEdit, isDelete) => {
        if (this.props.customer) {
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            return <CustomerControl {...this.props.customer} 
                        onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleOnBack}
                        isDeleteAllow={!!isDelete}
                        onDelete={this.handleOnDelete} />
        }

        return null;
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({match: isEdit}) => (
                <Route path="/customers/:dni/del" children={
                    ({match: isDelete}) => (
                        this.renderCustomerControl(isEdit, isDelete)
                    )
                }/>
            )}
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
    deleteCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

const mapDispatchToProps = { fetchCustomers, updateCustomers, deleteCustomers };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));