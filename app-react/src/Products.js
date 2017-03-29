import React, { Component } from 'react';
import { browserHistory } from 'react-router'

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
            // originalItems: [],
            items: [],
            filters: {}
        }
    }

    componentWillMount() {
        fetch('https://sock-o-ramma.herokuapp.com/api/items')
            .then(response => response.json())
            .then(response => this.setState({ items: response }))
            // .then(response => this.setState({ items: response, originalItems: response }))

    }

    filterProducts(item) {
        let items = this.state.items
        items = items.filter(function(item) {
            console.log('item filter ' + item.title.includes('The'))
            return item.title.includes('The')
        })
        this.setState({ items: items })
    }

    render() {
        let items = this.state.items.map(function (item, key) {
            return <ProductCard key={key} title={item.title} description={item.description} price={item.price} onClick={() => browserHistory.push('/' + item.id)}/>
        })

        return (<div>
            <Header />
            <div className="container">
                <Sidebar filterProducts={this.filterProducts} />
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
