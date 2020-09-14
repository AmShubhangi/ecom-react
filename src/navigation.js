import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';
import Login from './auth/login';
import Products from './products';
import ProductDetail from './product-detail';
import cart from './cart';
import checkout from './checkout';

const Navigation = () => {
    return (
        <Router>
                <Home />
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/cart" component={cart} />
                <Route path='/checkout' component={checkout} />
                <Route path="/products" component={Products} />
                <Route path="/product-detail/:id" component={ProductDetail} />
            </Switch>
        </Router>
    )
}

export default Navigation;