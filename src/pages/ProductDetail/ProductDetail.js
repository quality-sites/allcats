import React from 'react';
import {connect} from 'react-redux';
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';
import './ProductDetail.scss';

const ProductDetail = (props) => {
    return (
        <div className="container product-details">
            <div className="card">
                <div className="row">
                    <img src={props.product.images} alt={props.product.name} />
                    <ProductDetailComponent product={props.product}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) =>  {
    const product = state.shop.products.find(product => product.id === +props.match.params.id);
    return {
        product
    }
};

export default connect(mapStateToProps, null)(ProductDetail);
