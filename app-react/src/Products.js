import React, { Component } from 'react';

import ProductCard from './components/ProductCard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'


class Products extends Component {

    render() {
        return (<div>
            <Header/>
            <div className="container">
                <Sidebar />
                <div className="col-sm-9 column" id="itemColumn">
                    <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Products;
