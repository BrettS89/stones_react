import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './store/reducers/index';

import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import AddProduct from './containers/AddProduct';
import ShowProducts from './containers/ShowProducts';
import ProductDetail from './containers/ProductDetail';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <div className="main-cont">
          <Header />
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />        
            <Route path="/products/necklace-sets" component={ShowProducts} />
            <Route path="/products/necklaces" component={ShowProducts} />
            <Route path="/products/all" component={ShowProducts} />
            <Route path="/products/add" component={AddProduct} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/" component={Landing}/>
          </Switch>
          </div>
          <footer>
            <div>
              <p>Stones by Sue 2018</p>
            </div>
          </footer>     
      </div>    
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
