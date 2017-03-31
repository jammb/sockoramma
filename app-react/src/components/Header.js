import React, { Component } from 'react';


class Header extends Component {

  render() {
    return (             <div className="row header">
                <div className="col-sm-6">
                    <img id="logoImage" src="img/logo.png" alt="Logo" />
                </div>

                <div className="col-sm-6">
                    <ul className="list-inline pull-right">
                        <li className="headerRightContent"><a href="">
                            <i className="fa fa-shopping-cart black-text"></i>
                            <div>Cart</div>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
    )
  }
}

export default Header;
