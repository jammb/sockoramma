import React, { Component } from 'react';


class CustomerInfo extends Component {

  render() {
    return <section className="customerInformation text-center">


            <h2><strong>Customer Information</strong></h2>
            <br/>

            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required placeholder="First Name" /><br/><br/>

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required placeholder="Last Name" /><br/><br/>

            <label for="email">Email Address</label>
            <input type="text" id="email" name="email" required placeholder="Email Address" /><br/><br/>

            <label for="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" required placeholder="Phone Number" /><br/><br/>
            </section>

  }
}

export default CustomerInfo;
