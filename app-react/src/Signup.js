import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Header from './components/Header'


class Signup extends Component {

    constructor(props) {
        super(props)

        this.signup = this.signup.bind(this)

        this.state= {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    signup() {
        var name = this.state.name
        var email = this.state.email
        var password = this.state.password
        var confirmPassword = this.state.confirmPassword
        console.log(name, email, password)

        // if (name === '' || email === '' || password === '' || confirmPassword === '') {
        //     alert('You must fill in all fields')
        // }  else if (!email.includes('@') || (email.slice(email.length - 4, email.length - 3) !== '.')) {
        //     alert('You must enter a valid email address')
        // } else if (password !== confirmPassword) {
        //     alert('Your passwords must match')
        // } else {








        fetch('https://sock-o-ramma.herokuapp.com/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
        .then(function(response) {
                console.log('response.json ' + response.json)
                return response.json();
            })
        .then(function(response) {
            console.log('response.api_token ' + response.api_token)

            if (response.api_token) {
                (console.log('response token true ' + response.api_token))
                sessionStorage.setItem('token', response.api_token)
                browserHistory.push('/')
            } else {
                alert('Signup error: ' + response)
            }
        })

        }

}

    render() {



        return <div>
            <Header />
            <div className="container">
                    <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title text-center">Sign Up</h5>
                </div>
                <div className="panel-body">

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="form-control" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" maxLength="72"  value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="form-control" maxLength="72"  value={this.state.confirmPassword} onChange={(e) => this.setState({confirmPassword: e.target.value})} required />
                    </div>


                </div>

                <div className="panel-footer text-center">

                        <button id="actionButton" type="button" className="btn btn-lg btn-success" onClick={this.signup}>Sign Up</button>

                        <div>
                            <a className="text-center" id="actionLink" onClick={() => browserHistory.push('/signin')}>
                                Sign In
                            </a>
                        </div>

                    </div>
                    </div>
            </div>
            </div>

    }
}

export default Signup;
