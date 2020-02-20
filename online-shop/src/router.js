import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/home';
import LoginPage from './routes/login';
import Customer from './routes/customer';
import CustomerSales from './routes/customer/sale';
import Product from './routes/product';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/customer" exact component={Customer} />
        <Route path="/customer/:id" exact component={CustomerSales} />
        <Route path="/product" exact component={Product} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
