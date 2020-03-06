import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";
import './ShoppingCart.scss';

const ShoppingCart = (props) => {
    return (
        <>
            <div className="container shopping-cart-container">
                <div className="card shopping-cart">
                    <div className="card-body">
                        {props.cartItemCount ? props.cartItems.map(cart => (
                            <CartItem key={cart.id} {...cart} img={cart.images} />
                        )) : <h1 className="display-4 mt-5 text-center">There is no product in your cart</h1> }
                    </div>
                    <div className="card-footer">
                        <div className="pull-right" style={{margin: '10px'}}>
                            <div className="pull-right" style={{margin: '5px'}}>
                                Total price: <b>{formatMoney(props.totalPrice)}€</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const mapStateToProps = state => {
    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
