import React, { Component } from 'react';
import { browserHistory } from 'react-router'


import Header from './components/Header'


class signin extends Component {

    constructor(props) {
        super(props)

        this.signin = this.signin.bind(this)

        this.state= {
            email: '',
            password: ''
        }
    }

    signin() {
        var email = this.state.email
        var password = this.state.password
        console.log(email, password) 

        fetch('https://sock-o-ramma.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    .then(function(response) {
            return response.json();
        })

    .then(function(response) {
            console.log('response ' + response);

            if (response.token) {
                sessionStorage.setItem('token', response.token);
                browserHistory.push('/')            }
            else {
                alert('There was an error signing in');
                console.log('Signin : ' + response);
            }
        })

}

    render() {


        
        return <div>
            <div className="row header">
                <div className="col-sm-6">
                    <img id="logoImage" src="img/logo.png" alt="Logo" />
                </div>
            </div>
            <div className="container">
                    <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title text-center">Sign In</h5>
                </div>
                <div className="panel-body">

                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="text" id="email" className="form-control" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" maxLength="72"  value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required />
                    </div>

                    
                </div>

                <div className="panel-footer text-center">

                        <button id="actionButton" type="button" className="btn btn-lg btn-success" onClick={this.signin}>Sign in</button>

                        <div>
                            <a className="text-center" id="actionLink" onClick={() => browserHistory.push('/signup')}>
                                Sign Up
                            </a>
                        </div>

                    </div>
                    </div>
            </div>
            </div>
        
    }
}

export default signin;
