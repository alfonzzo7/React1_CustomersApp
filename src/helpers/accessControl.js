
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerActions from './../components/CustomerActions';

export const accessControl = permissionsRequired => WrappedComponent => {
    const SecuredControl = class extends Component {
        render() {
            const { permissions } = this.props.user;
            const isAllow = permissionsRequired.every(p => permissions.indexOf(p) >= 0);

            if (!isAllow) {
                return (
                    <div>
                        <div>
                            <i>No tiene permisos de acceso</i>
                        </div>
                        <CustomerActions>
                            <button type="button" onClick={this.props.onBack}>Volver</button>
                        </CustomerActions>
                    </div>
                );
            }

            return <WrappedComponent {...this.props} />
        }
    }

    return connect(state => ({ user: state.user }))(SecuredControl);
}