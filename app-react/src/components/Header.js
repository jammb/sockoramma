import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class Header extends Component {
constructor(props) {
        super(props)
        this.returnToSignin = this.returnToSignin.bind(this)
    }

    returnToSignin() {
        if (sessionStorage.length == 1) {
            sessionStorage.clear()
        } else if (sessionStorage.length == 0) {
            browserHistory.push('/signin')
        }
    }


    render() {
    return (<div className="row header">
                <div className="col-sm-6">
                    <img id="logoImage" src="img/logo.png" alt="Logo" />
                </div>

                <div className="col-sm-6">
                    <ul className="list-inline pull-right">
                        <li className="headerRightContent"><a href="">
                            <i className="fa fa-shopping-cart fa-2x black-text"></i>
                            </a>
                        </li>
                        <li className="headerRightContent" onClick={this.returnToSignin}><a href=""> {sessionStorage.length == 1 ? 'Sign out' : 'Sign in'}
                            {/*<i className="fa ${sessionStorage === 1 ? 'fa-sign-out fa-2x black-text"></i>*/}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    )
  }
}

export default Header;
