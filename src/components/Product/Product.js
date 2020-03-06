import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";
import './Product.scss';

const Product = props => {

    const {
        id,
        name,
        price,
        image,
        description
    } = props.product;

    return (
        <div className="card h-100 product">
            <Link to={`/products/${id}`} className="product__link">
                <img src={image} alt={name} className="card-img-top product__img" />
            </Link>
            <div className="card-body product__text">
                <h4 className="card-title product__title">
                    <Link to={`/products/${id}`}>{name}</Link>
                </h4>
                <h5 className="product__price">${formatMoney(price)}</h5>
                <p className="card-text product__description">{description}</p>
                <button
                    onClick={() => {
                        props.dispatch(addProductToCart({...props.product}))
                    }}
                    className="btn btn-info product__add-to-cart">Add to cart
                </button>
            </div>
        </div>
    );
};

export default connect()(Product);

