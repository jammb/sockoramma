import React from 'react'

class Cart extends React.Component {
    componentWillMount() {
        this.props.getCart()
    }
    
    render() {
        let cart1 = this.props.cart1.map((item, key) => <div className="card" key={key}>
            <div className="card-content">
                <span className="tag is-success">{item.quantity}</span> <strong>{item.title}</strong>
            </div>
        </div>)

        if (cart1.length === 0) {
            cart1 = <p>There are no items in your cart. <a href="/">Return to the home page.</a></p>
        }

        return <div>
            <h1>Your Cart</h1>
            {cart1}
        </div>
    }
}

export default Cart