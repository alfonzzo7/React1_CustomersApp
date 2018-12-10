import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import { insertCustomers } from './../actions/insertCustomers';

class NewCustomerContainer extends Component {
    handleSubmit = values => {
        // console.log(JSON.stringify(values));
        return this.props.insertCustomers(values).then(res => {
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
        <CustomerEdit {...this.props.customer} 
            onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onBack={this.handleOnBack} />
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Nuevo Cliente`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomers: PropTypes.func.isRequired,
};

export default withRouter(connect(null, {insertCustomers})(NewCustomerContainer));