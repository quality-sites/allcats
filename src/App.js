import React from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import BookAVisit from "./pages/BookAVisit/BookAVisit";
import CatDelivery from "./pages/CatDelivery/CatDelivery";
import Donate from "./pages/Donate/Donate";

export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/products'} component={Home}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    <Route exact path={'/cart'} component={ShoppingCart}/>
                    <Route exact path={'/book-a-visit'} component={BookAVisit}/>
                    <Route exact path={'/cat-delivery'} component={CatDelivery}/>
                    <Route exact path={'/donate'} component={Donate}/>
                    <Redirect exact from="/" to="products" />
                </Switch>
                <Footer/>
            </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
