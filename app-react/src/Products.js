import React, { Component } from 'react';

import ProductCard from './components/ProductCard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'


class Products extends Component {

    //     constructor(props){
    // super(props)
    // this.getItems=this.getItems.bind(this)   // this.AddTodo = this.AddTodo.bind(this)
    // this.addItems=this.addItems.bind(this)
    // this.state = {                        // state of the page                    
    //        items: []                              //start with empty state  
    //     }
    // }
    // componentWillMount(){
    //  this.getItems()
    // }
    //  getItems(){
    //         fetch('/api/items')
    //              .then (response => response.json())
    //             .then(items => this.setState({items:items}))
    //         }
    // addItems(){
    //     this.getItems()
    //       }

    constructor(props) {
        super(props)
        this.filterProducts = this.filterProducts.bind(this)

        this.state = {
            items: [],
            filters: {}
        }
    }

    componentWillMount() {
        fetch('https://sock-o-ramma.herokuapp.com/api/items')
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response => this.setState({items: response}))
    }

    filterProducts(filters) {
        this.setState({filters: filters})
    }

    render() {
        return (<div>
            <Header/>
            <div className="container">
                <Sidebar filterProducts={this.filterProducts}/>
                <ProductCard title="title" description="description" price="price"/>
            </div>
        </div>
        );
    }
}

export default Products;
