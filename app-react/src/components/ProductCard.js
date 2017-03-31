import React from 'react'

class ProductCard extends React.Component {
    // componentWillMount() {
    //     this.props.getItems(this.props.params.itemId)
    // }
    render() {
        return   <div className="col s6 m4">
                    <div className="card large">
                        <div className="card-image">
                            <img src={this.props.picture} className="productImage"/>
                        </div>
                        <div className="card-title black-text text-center productTitle">{this.props.title}</div>

                        <div className="card-content">
                            <p className="productDescription">{this.props.description}</p>
                        </div>

                        <div className="card-action">
                            <button type="button" className="button" onClick={() => this.props.addToCart(this.props.id)}><i className="fa fa-shopping-cart black-text"></i> Add to Cart</button>
                            <span className="productPrice pull-right">{this.props.price}</span>
                        </div>
                     
                    </div>
                </div>
    }
}

export default ProductCard