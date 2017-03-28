import React from 'react'

class FeaturedProduct extends React.Component {
    render() {
        return   <div className="col s6 m4">
                    <div className="card large">
                        <div className="card-image">
                            <img src="./img/sample.jpg" className="productImage"/>
                        </div>
                        <div className="card-title black-text text-center productTitle">Card Title</div>

                        <div className="card-content">
                            <p className="productDescription">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#" className="productCart"><i className="fa fa-shopping-cart black-text"></i> Add to Cart</a>
                            <span className="productPrice pull-right">$10.00</span>
                        </div>
                    </div>
                </div>
    }
}

export default FeaturedProduct