// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load page view components
// Import your Todos and Completed components here...

import Products from './Products'
import Checkout from './Checkout'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={Products} />
            <Route path="/checkout" component={Checkout} />
        </Router>
    }
}

export default Routes