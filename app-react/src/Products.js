import React, { Component } from 'react';
import { browserHistory } from 'react-router'

import ProductCard from './components/ProductCard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'


class Products extends Component {
         constructor(props) {
        super(props)
        this.filterProductsMaterial = this.filterProductsMaterial.bind(this)
        this.filterProductsStyle = this.filterProductsStyle.bind(this)
        this.filterProductsColor = this.filterProductsColor.bind(this)
        // this.filterProductsSize = this.filterProductsSize.bind(this)
        // this.getItems = this.getItems.bind(this)
        this.addToCart = this.addToCart.bind(this)

        this.state = {
            originalItems: [],
            items: [],
            filters: {},
            cart: []
        }
    }

    componentWillMount() {
        fetch('https://sock-o-ramma.herokuapp.com/api/items')
            .then(response => response.json())
            // .then(response => this.setState({ items: response }))
            .then(response => this.setState({ items: response, originalItems: response }))

    }
    //  getItems() {
    //     fetch('https://sock-o-ramma.herokuapp.com/api/items')
    //     .then(res => res.json())
    //     .then(res => this.setState({items: res, originalItems: res}))
    // }
     addToCart(id) {
        fetch('https://sock-o-ramma.herokuapp.com/api/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        })
        .then(res => res.json())
        .then(res => {
            let cart = this.state.cart
            cart.push(res)

            this.setState({cart: cart})
        })
    }


    filterProductsMaterial(term) {
        let items = this.state.originalItems
        items = items.filter(function(item) {
            console.log('item filter ' + item.material.name.includes(term))
            return item.material.name.includes(term)
        })
        this.setState({ items: items })
    }

    filterProductsStyle(term) {
        let items = this.state.originalItems
        items = items.filter(function(item) {
            console.log('item filter ' + item.style.name.includes(term))
            return item.style.name.includes(term)
        })
        this.setState({ items: items })
    }

     filterProductsColor(term) {
        let items = this.state.originalItems
        items = items.filter(function(item) {
            console.log('item filter ' + item.color.name.includes(term))
            return item.color.name.includes(term)
        })
        this.setState({ items: items })
    }

    render() {
        let items = this.state.items.map((item, key) => {
            return <ProductCard key={key} id={item.id} title={item.title} description={item.description} price={item.price} addToCart={this.addToCart} onClick={() => browserHistory.push('/' + item.id)}/>
        })

        return (<div>
            <div className="row header">
                <div className="col-sm-6">
                    <img id="logoImage" src="img/logo.png" alt="Logo" />
                </div>

                <div className="col-sm-6">
                    <ul className="list-inline pull-right">
                        <li className="headerRightContent"><a href="">
                            <i className="fa fa-shopping-cart fa-2x black-text"></i>
                            </a>
                        </li>
                        <li className="headerRightContent"><a href="">
                            <i className="fa fa-sign-out fa-2x black-text"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <Sidebar filterProductsMaterial={this.filterProductsMaterial} filterProductsStyle={this.filterProductsStyle} filterProductsColor={this.filterProductsColor}/>
                <div className="col-sm-9 column" id="itemColumn">
                    <div className="row">
                        {/*<ul className="list-group">*/}
                        {/*<ProductCard title="title" description="description" price="price"/>*/}
                        {items}
                        {/*</ul>*/}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Products;
