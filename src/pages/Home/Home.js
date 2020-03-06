import React from 'react';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
import {useFetch} from '../../api/http';
import './Home.scss';

const Home = () => {

    const {data, error, loading} = useFetch();

    if (loading) {
        return <div data-testid="loading">Loading...</div>;
    }

    if (error) {
        return <div data-testid="error">Error Loading Data, Please try again later.</div>;
    }

    return (
        <React.Fragment>
            <div className="container home-container">
                <div className="row">
                    <FilterBar/>
                    <ProductList product={data} />
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;
