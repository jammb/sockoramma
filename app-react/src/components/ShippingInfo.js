import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class CustomerInfo extends Component {
	constructor(props) {
		super(props)
	
	this.buyButton = this.buyButton.bind(this)

	}

	buyButton() {
		alert('Your items will be shipped in 3-5 business days')
		browserHistory.push('/') 
	}

  render() {
    return  <div className="text-center">
                   <h2><strong>Customer Information</strong></h2>
            <br/>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="name" /><br/><br/>

            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id="streetAddress" name="streetAddress" required placeholder="Street Address" /><br/><br/>

            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required placeholder="City" /><br/><br/>

            <label htmlFor="state">State</label>
			<input type="text" id="state" name="state" required placeholder="State" /><br/><br/>
            {/*<select id="state" name="state">	
					<option value="AL">Alabama</option>
					<option value="AK">Alaska</option>
					<option value="AZ">Arizona</option>
					<option value="AR">Arkansas</option>
					<option value="CA">California</option>
					<option value="CO">Colorado</option>
					<option value="CT">Connecticut</option>
					<option value="DE">Delaware</option>
					<option value="DC">District Of Columbia</option>
					<option value="FL">Florida</option>
					<option value="GA">Georgia</option>
					<option value="HI">Hawaii</option>
					<option value="ID">Idaho</option>
					<option value="IL">Illinois</option>
					<option value="IN">Indiana</option>
					<option value="IA">Iowa</option>
					<option value="KS">Kansas</option>
					<option value="KY">Kentucky</option>
					<option value="LA">Louisiana</option>
					<option value="ME">Maine</option>
					<option value="MD">Maryland</option>
					<option value="MA">Massachusetts</option>
					<option value="MI">Michigan</option>
					<option value="MN">Minnesota</option>
					<option value="MS">Mississippi</option>
					<option value="MO">Missouri</option>
					<option value="MT">Montana</option>
					<option value="NE">Nebraska</option>
					<option value="NV">Nevada</option>
					<option value="NH">New Hampshire</option>
					<option value="NJ">New Jersey</option>
					<option value="NM">New Mexico</option>
					<option value="NY">New York</option>
					<option value="NC">North Carolina</option>
					<option value="ND">North Dakota</option>
					<option value="OH">Ohio</option>
					<option value="OK">Oklahoma</option>
					<option value="OR">Oregon</option>
					<option value="PA">Pennsylvania</option>
					<option value="RI">Rhode Island</option>
					<option value="SC">South Carolina</option>
					<option value="SD">South Dakota</option>
					<option value="TN">Tennessee</option>
					<option value="TX">Texas</option>
					<option value="UT">Utah</option>
					<option value="VT">Vermont</option>
					<option value="VA">Virginia</option>
					<option value="WA">Washington</option>
					<option value="WV">West Virginia</option>
					<option value="WI">Wisconsin</option>
					<option value="WY">Wyoming</option>
				</select> */}
				<br/>

            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" name="zipCode" required placeholder="Zip Code" /><br/><br/>


            <label htmlFor="cardNumber">Credit Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" required placeholder="Credit Card Number" /><br/><br/>
			
            <label htmlFor="expiration">Credit Card Expiration</label>
            <input type="text" id="expiration" name="expiration" required placeholder="Credit Card Expiration" /><br/><br/>
			
			<button type="button" className="btn btn-success" onClick={this.buyButton}>Buy</button>

        </div>

  }
}

export default CustomerInfo;
