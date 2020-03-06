import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Product from "../../components/Product/Product";
import {tagFilter} from "../../pipes/tagFilter";
import {orderByFilter} from "../../pipes/orderByFilter";
import LayoutMode from "../../components/LayoutMode/LayoutMode";
import {paginationPipe} from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";

export const ProductList = props => {
    
    const state = {
        colValue : 'col-lg-4',
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3
    };
    
    const [productState, setProductState] = useState(state);
    
    const changeLayout = (n) => {
        const updatedState = {...productState};
        updatedState.gridValue = n;
        let realGridValue;

        if(n === 3) {
            realGridValue = 4;
        } else if(n === 4) {
            realGridValue = 3
        } else {
            realGridValue = 6;
        }
        updatedState.colValue = `col-lg-${realGridValue}`;
        setProductState(updatedState);
    };

    const onPrev = () => {
        const updatedState = {...productState};
        updatedState.currentPage = productState.currentPage - 1;
        setProductState(updatedState);
    };

    const onNext = () => {
        const updatedState = {...productState};
        updatedState.currentPage= productState.currentPage + 1;
        setProductState({...updatedState});
    };

    const goPage = (n) => {
        const updatedState = {...productState};
        updatedState.currentPage = n;
        setProductState({...updatedState});
    };

    useEffect(() => {
        const updatedProductState = {...productState};
        updatedProductState.colValue = updatedProductState.colValue.length -1;
        setProductState({...updatedProductState});
    }, []);

    return (
        <div className="col-lg-9">
            <div className="row mb-3">
                <div className="col-12 d-none d-lg-block d-xl-block">
                    <div className="card ">
                        <div className="card-header d-flex justify-content-end">
                            <span className="mr-3">Change Layout: </span>
                            <LayoutMode len={2} isActive={productState.gridValue === 2} click={changeLayout} />
                            <LayoutMode len={3} isActive={productState.gridValue === 3} click={changeLayout} />
                            <LayoutMode len={4} isActive={productState.gridValue === 4} click={changeLayout} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {paginationPipe(props.products, productState).map(product =>{
                    let classes = `${productState.colValue} col-md-6 mb-4`;
                    return (<div className={classes} key={product.id}>
                        <Product key={product.id} product={product} />
                    </div>)
                })}
            </div>
            <div className="d-flex justify-content-end">
                <Pagination
                    totalItemsCount={props.products.length}
                    currentPage={productState.currentPage}
                    perPage={productState.perPage}
                    pagesToShow={productState.pagesToShow}
                    onGoPage={goPage}
                    onPrevPage={onPrev}
                    onNextPage={onNext}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    const tags = state.tagFilter;
    const orderBy = state.orderBy;
    const filterByBrandArr = tagFilter(state.shop.products, tags);
    const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);
    return {products: filterByOrderArr }
};

export default connect(mapStateToProps, null)(ProductList);
