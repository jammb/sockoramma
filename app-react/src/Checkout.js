import React, { Component } from 'react';

import CustomerInfo from './components/CustomerInfo'
import ShippingInfo from './components/ShippingInfo'


class Checkout extends Component {

    render() {
        return <div className="container">
        {/*<CustomerInfo/>*/}
        <ShippingInfo/>
            </div>
        
    }
}

export default Checkout;
