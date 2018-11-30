import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import AppFrame from "../components/AppFrame";
import CustomerActions from './../components/CustomerActions';

class HomeContainer extends Component {
    goCustomer = () => {
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header="Home"
                    body={
                        <div>
                            Pantalla inicial
                            <CustomerActions>
                                {/* <Link to="/customers">Listado de Clientes</Link> */}
                                <button onClick={this.goCustomer}>Listado de Clientes</button>
                            </CustomerActions>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);