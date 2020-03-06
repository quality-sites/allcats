import React from 'react';
import TagFilter from "../../components/TagFilter/TagFilter";
import OrderFilter from "../../components/OrderFilter/OrderFilter";

export const FilterBar = () => (
    <div className="col-lg-3">
        <div className="row">
            <div className="col-12">
                <TagFilter/>
            </div>
            <div className="col-12">
                <OrderFilter/>
            </div>
        </div>
    </div>
);

export default FilterBar;